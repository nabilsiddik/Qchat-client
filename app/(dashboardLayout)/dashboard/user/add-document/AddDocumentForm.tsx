"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FAQ = {
  question: string;
  answer: string;
};

const optionalFields = [
  "code",
  "faqs",
  "brand",
  "model",
  "size",
  "weight",
  "color",
  "categorie",
  "subCategories",
  "tags",
  "features",
  "userManual",
  "offer",
  "deliveryDetails",
];

export default function AddDocumentForm() {
  const [activeFields, setActiveFields] = useState<string[]>([]);
  const [selectedField, setSelectedField] = useState<string>("");

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",

    code: "",
    brand: "",
    model: "",
    size: "",
    weight: "",
    color: "",
    categorie: "",
    userManual: "",
    offer: "",
    deliveryDetails: "",

    subCategories: [] as string[],
    tags: [] as string[],
    features: [] as string[],
    faqs: [] as FAQ[],
  });

  const updateField = (key: string, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const addOptionalField = () => {
    if (!selectedField || activeFields.includes(selectedField)) return;
    setActiveFields([...activeFields, selectedField]);
    setSelectedField("");
  };

  const addArrayItem = (field: string) => {
    updateField(field, [...(formData as any)[field], ""]);
  };

  const updateArrayItem = (field: string, index: number, value: string) => {
    const arr = [...(formData as any)[field]];
    arr[index] = value;
    updateField(field, arr);
  };

  const addFaq = () => {
    updateField("faqs", [...formData.faqs, { question: "", answer: "" }]);
  };

  const updateFaq = (
    index: number,
    key: "question" | "answer",
    value: string,
  ) => {
    const faqs = [...formData.faqs];
    faqs[index][key] = value;
    updateField("faqs", faqs);
  };

  // ---------- Submit ----------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.description ||
      !formData.price ||
      !formData.quantity
    ) {
      alert("Required fields missing");
      return;
    }

    const payload = {
      ...formData,
      price: Number(formData.price),
      quantity: Number(formData.quantity),
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/document/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(payload),
        },
      );

      if (!res.ok) throw new Error("Failed to submit");

      alert("Product added successfully");
    } catch (err) {
      console.error(err);
      alert("Submission failed");
    }
  };

  // ---------- Add document form ----------
  return (
    <div>
      <div className="flex items-center justify-between gap-5 mb-6">
        <h1 className="text-2xl font-semibold">Add Product</h1>

        {/* Field selector */}
        <div className="flex gap-2">
          <Select onValueChange={setSelectedField} value={selectedField}>
            <SelectTrigger>
              <SelectValue placeholder="Add optional field" />
            </SelectTrigger>
            <SelectContent>
              {optionalFields.map((f) => (
                <SelectItem key={f} value={f}>
                  {f}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button type="button" onClick={addOptionalField}>
            Add Field
          </Button>
        </div>
      </div>

      {/* form  */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Required Fields */}
        <div className="grid gap-4">
          <Input
            placeholder="Product Name *"
            value={formData.name}
            onChange={(e) => updateField("name", e.target.value)}
          />

          <Textarea
            placeholder="Description *"
            value={formData.description}
            onChange={(e) => updateField("description", e.target.value)}
          />

          <Input
            type="number"
            placeholder="Price *"
            value={formData.price}
            onChange={(e) => updateField("price", e.target.value)}
          />

          <Input
            type="number"
            placeholder="Quantity *"
            value={formData.quantity}
            onChange={(e) => updateField("quantity", e.target.value)}
          />
        </div>

        {/* Render optional fields */}
        {activeFields.map((field) => (
          <div key={field} className="space-y-3 border p-4 rounded-xl">
            <h3 className="font-medium capitalize">{field}</h3>

            {/* String fields */}
            {typeof (formData as any)[field] === "string" && (
              <Input
                value={(formData as any)[field]}
                onChange={(e) => updateField(field, e.target.value)}
              />
            )}

            {/* Array of strings */}
            {Array.isArray((formData as any)[field]) && field !== "faqs" && (
              <div className="space-y-2">
                {(formData as any)[field].map((item: string, i: number) => (
                  <Input
                    key={i}
                    value={item}
                    placeholder={`${field} ${i + 1}`}
                    onChange={(e) => updateArrayItem(field, i, e.target.value)}
                  />
                ))}

                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => addArrayItem(field)}
                >
                  Add Item
                </Button>
              </div>
            )}

            {/* FAQ */}
            {field === "faqs" && (
              <div className="space-y-4">
                {formData.faqs.map((faq, i) => (
                  <div key={i} className="space-y-2 border p-3 rounded">
                    <Input
                      placeholder="Question"
                      value={faq.question}
                      onChange={(e) => updateFaq(i, "question", e.target.value)}
                    />
                    <Textarea
                      placeholder="Answer"
                      value={faq.answer}
                      onChange={(e) => updateFaq(i, "answer", e.target.value)}
                    />
                  </div>
                ))}

                <Button type="button" onClick={addFaq} variant="secondary">
                  Add FAQ
                </Button>
              </div>
            )}
          </div>
        ))}

        <Button type="submit" className="w-full">
          Submit Product
        </Button>
      </form>
    </div>
  );
}
