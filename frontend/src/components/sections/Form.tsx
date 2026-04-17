"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { ArrowRight } from "lucide-react";
import { useState } from "react"; // Added to handle loading state
const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_URL;
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupTextarea } from "@/components/ui/input-group";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message too short"),
});

const Form = () => {
  const [isPending, setIsPending] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsPending(true);
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      toast.error("An error occurred.");
      console.log(error);
    } finally {
      setIsPending(false);
    }
  }

  return (
    <div className="w-full max-w-2xl p-10 bg-white rounded-[40px] shadow-sm border border-gray-100 text-primary-text">
      <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Controller
              name="firstName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="text-base font-semibold">
                    First Name
                  </FieldLabel>
                  <Input
                    {...field}
                    placeholder="Enter your first name..."
                    className="h-14 rounded-2xl bg-gray-50/50 border-gray-200"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError
                      errors={[fieldState.error]}
                      className="text-red-500"
                    />
                  )}
                </Field>
              )}
            />
            <Controller
              name="lastName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="text-base font-semibold">
                    Last Name
                  </FieldLabel>
                  <Input
                    {...field}
                    placeholder="Enter your last name..."
                    className="h-14 rounded-2xl bg-gray-50/50 border-gray-200"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError
                      errors={[fieldState.error]}
                      className="text-red-500"
                    />
                  )}
                </Field>
              )}
            />
          </div>

          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="text-base font-semibold">
                  Email
                </FieldLabel>
                <Input
                  {...field}
                  placeholder="Enter your email address..."
                  className="h-14 rounded-2xl bg-gray-50/50 border-gray-200"
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.invalid && (
                  <FieldError
                    errors={[fieldState.error]}
                    className="text-red-500"
                  />
                )}
              </Field>
            )}
          />

          <Controller
            name="message"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="text-base font-semibold">
                  How can I help you?
                </FieldLabel>
                <InputGroup>
                  <InputGroupTextarea
                    {...field}
                    placeholder="Enter your message..."
                    rows={6}
                    className="min-h-[180px] rounded-3xl bg-gray-50/50 border-gray-200 resize-none p-4"
                    aria-invalid={fieldState.invalid}
                  />
                </InputGroup>
                {fieldState.invalid && (
                  <FieldError
                    errors={[fieldState.error]}
                    className="text-red-500"
                  />
                )}
              </Field>
            )}
          />

          <div className="flex justify-start md:justify-end pt-4">
            <Button
              type="submit"
              disabled={isPending}
              size="lg"
              className=" text-md xl:text-lg px-5 py-4 xl:px-8 xl:py-6 rounded-full cursor-pointer "
            >
              <span className="text-lg font-medium">
                {isPending ? "Sending..." : "Send Message"}
              </span>
              {!isPending && (
                <div className="bg-white rounded-full p-1.5 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-black" />
                </div>
              )}
            </Button>
          </div>
        </FieldGroup>
      </form>
    </div>
  );
};

export default Form;
