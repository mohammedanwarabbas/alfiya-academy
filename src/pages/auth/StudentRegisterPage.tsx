import { AuthLayout } from '../../components/auth/AuthLayout';
import { StudentRegisterForm } from '../../components/auth/StudentRegisterForm';

export default function StudentRegisterPage() {
  return (
    <AuthLayout
      title="Create Student Account"
      subtitle="Join thousands of learners worldwide"
    >
      <StudentRegisterForm />
    </AuthLayout>
  );
}