import { LoginForm } from "@/components/login-form";

export const metadata = {
  title: "Login - Future Careers",
  description: "Login to your Future Careers account",
};

export default function LoginPage() {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12">
      <LoginForm />
    </div>
  );
}
