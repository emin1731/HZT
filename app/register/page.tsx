import { RegisterForm } from "@/components/register-form";

export const metadata = {
  title: "Register - Future Careers",
  description: "Create a new Future Careers account",
};

export default function RegisterPage() {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12">
      <RegisterForm />
    </div>
  );
}
