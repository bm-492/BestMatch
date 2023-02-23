import AuthenticationCard from '@component/AuthenticationCard';
import CustomHeader from '@component/CustomHeader';
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import { getCsrfToken } from 'next-auth/react';

export default function LoginPage({
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <CustomHeader pageName='login' />

      <main>
        <AuthenticationCard variant='login' csrfToken={csrfToken} />
      </main>
    </div>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return {
    props: {
      csrfToken: await getCsrfToken(ctx),
    },
  };
}
