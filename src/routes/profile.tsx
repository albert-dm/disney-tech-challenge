import { createFileRoute } from "@tanstack/react-router";
import { User, USER_PROFILE_COOKIE_NAME, UserSchema } from "../schemas/user";
import { useMemo, useState } from "react";
import { useCookies } from "react-cookie";
import { ProfileForm } from "../components/profileForm/profileForm";
import { ProfileView } from "../components/profileView";

export const Route = createFileRoute("/profile")({
  component: ProfileComponent,
});

function ProfileComponent() {
  const [cookies, setCookie, removeCookie ] = useCookies([USER_PROFILE_COOKIE_NAME]);
  const { userProfile } = cookies;
  const [isEditing, setIsEditing] = useState<boolean>(!Boolean(userProfile));

  const user = useMemo(() => {
    const parsed = UserSchema.safeParse(userProfile);
    if (!parsed.success) {
      removeCookie(USER_PROFILE_COOKIE_NAME);
      return null;
    }
    return parsed.data;
  }, [userProfile]);

  return isEditing ? (
    <ProfileForm
      updateUser={(user) => {
        setCookie(USER_PROFILE_COOKIE_NAME, user);
        setIsEditing(false);
      }}
      user={user}
      cancelEdit={() => setIsEditing(false)}
    />
  ) : (
    <ProfileView user={user} editProfile={() => setIsEditing(true)} />
  );
}
