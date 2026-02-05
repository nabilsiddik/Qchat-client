"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Smile, Meh, Frown, Laugh, Annoyed } from "lucide-react";
import { FieldLabel } from "@/components/ui/field";

const options = [
    { value: "very_dissatisfied", label: "Very Dissatisfied", Icon: Frown },
    { value: "dissatisfied", label: "Dissatisfied", Icon: Annoyed },
    { value: "neutral", label: "Neutral", Icon: Meh },
    { value: "satisfied", label: "Satisfied", Icon: Smile },
    { value: "very_satisfied", label: "Very Satisfied", Icon: Laugh },
];

export default function SatisfactionSelector() {
    const [selected, setSelected] = useState<string>("");

    return (
        <div>
            <FieldLabel className="my-5">How much you are satisfied with us? (Optional)</FieldLabel>

            <div className="w-full flex flex-wrap gap-4  mb-5">
                {options.map(({ value, label, Icon }) => {
                    const active = selected === value;

                    return (
                        <motion.button
                            type='button'
                            key={value}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setSelected(value)}
                            className={`relative flex flex-col items-center justify-center gap-3 px-6 py-5 rounded-2xl border transition-all min-w-30 cursor-pointer
              ${active
                                    ? "bg-white shadow-lg border-purple-300"
                                    : "bg-white border-gray-200 hover:shadow-md"
                                }`}
                        >
                            {active && (
                                <motion.div
                                    layoutId="highlight"
                                    className="absolute inset-0 rounded-2xl ring-2 ring-purple-400/40"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}

                            <Icon className="w-8 h-8 text-gray-600" />
                            <span className="text-sm font-medium text-gray-700">
                                {label}
                            </span>
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
}
