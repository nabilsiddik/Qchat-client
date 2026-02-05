'use client'

import SatisfactionSelector from '@/components/modules/feedback/SatisfactionSelector'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import React, { useState } from 'react'

const FeedbackForm = () => {
    const [feedbackType, setFeedbackType] = useState('feedback')
    const [formData, setFormData] = useState({
        feedbackTitle: '',
        feedbackDescription: ''
    })

    // update field 
    const updateField = (name: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className='mt-10'>
            <form>
                <Select onValueChange={setFeedbackType} value={feedbackType}>
                    <SelectTrigger className='mb-4 w-full py-5 cursor-pointer'>
                        <SelectValue placeholder="Add optional field" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value='feedback' className='cursor-pointer'>
                            Feedback
                        </SelectItem>
                        <SelectItem value='report bug' className='cursor-pointer'>
                            Report a Bug
                        </SelectItem>
                        <SelectItem value='improvement' className='cursor-pointer'>
                            Suggest Improvement
                        </SelectItem>
                    </SelectContent>
                </Select>

                <Input
                    placeholder="Feedback Title *"
                    value={formData.feedbackTitle}
                    onChange={(e) => updateField("feedbackTitle", e.target.value)}
                    className='mb-4 py-5'
                />

                <Textarea
                    placeholder="Feedback Description *"
                    value={formData.feedbackDescription}
                    onChange={(e) => updateField("feedbackDescription", e.target.value)}
                    className='mb-5'
                />

                {/* satisfaction selector  */}
                {feedbackType && formData?.feedbackTitle && formData?.feedbackDescription &&
                    <SatisfactionSelector />
                }


                <Button type="submit" className="w-full font-medium cursor-pointer">
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default FeedbackForm