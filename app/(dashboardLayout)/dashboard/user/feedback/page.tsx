import FeedbackForm from "../../../../../components/shared/forms/FeedbackForm"

const Feedback = () => {
    return (
        <div>
            <div className='mt-10 bg-gray-50 rounded-lg shadow-lg py-10 px-5 lg:px-10 xl:px-20 max-w-4xl mx-auto border'>
                <div className='text-center'>
                    <h1 className='font-bold text-3xl text-center'>Feedback</h1>
                    <p className='mt-2 text-gray-700 font-medium'>Give us Feedback, Report a Bug, or Tell us how we can improve.</p>
                </div>

                <div>
                    {/* feedback form  */}
                    <FeedbackForm/>
                </div>
            </div>
        </div>
    )
}

export default Feedback