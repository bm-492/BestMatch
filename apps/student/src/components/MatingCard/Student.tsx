import StudentForm from '@component/Form/Student';
import type { ComponentProps } from 'react';

type StudentCardProps = Pick<ComponentProps<typeof StudentForm>, 'variant'>;

export default function StudentCard({ variant }: StudentCardProps) {
  return <StudentForm variant={variant} />;
}
