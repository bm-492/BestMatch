import type { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';

import { authOptions } from '@acme/auth';

import CustomHeader from '@component/CustomHeader';
import { ProfileCard } from '@component/Card';
import AccessDenied from '@component/AccessDenied';

import { trpc } from '@utility/trpc';
import { flattenedTimerange } from '@utility/util';

export default function ProfilePage() {
  const { data: session } = useSession();
  const { data: profile, error } = trpc.student.getProfile.useQuery(undefined, {
    retry: false,
    refetchOnWindowFocus: false,
  });

  if (error || !profile) return <div>cannot read your profile</div>;
  if (!session) {
    return <AccessDenied />;
  }

  return (
    <div>
      <CustomHeader pageName='profile' />

      <main>
        <ProfileCard
          variant='profile'
          profile={{
            ...profile,
            do_not_disturb: flattenedTimerange(profile.do_not_disturb),
          }}
        />
      </main>
    </div>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return {
    props: {
      session: await getServerSession(ctx.req, ctx.res, authOptions),
    },
  };
}
