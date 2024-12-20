import { calculateAge, formatDate } from "../../helpers/date";
import { User } from "../../schemas/user";
import { Button } from "../button";

interface ProfileViewProps {
  user: User | null;
  editProfile: () => void;
}

export function ProfileView({ user, editProfile }: ProfileViewProps) {
  return (
    <section className="bg-background py-24 px-16 flex flex-col items-start gap-2">
      {user ? (
        <>
          <h2 className="text-4xl">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-sm">Last Updated {formatDate(user.birthDate)}</p>
          <br />
          <p className="font-semibold">Age: {calculateAge(user.birthDate)}</p>
          <p className="font-semibold">
            Location: {user.city}, {user.state}
          </p>
          <p className="font-semibold">Favorite Disney Character: {user.favoriteCharacter}</p>
          <p className="font-semibold">Favorite Disney Ride: {user.favoriteRide}</p>
          <p className="font-semibold">Favorite Disney Movie: {user.favoriteMovie}</p>
          <p className="font-semibold">Favorite DisneyLand: {user.favoritePark}</p>
        </>
      ) : (
        <p>No user information found.</p>
      )}
      <br />
      <Button variant="primary" onClick={editProfile}>Edit Profile</Button>
    </section>
  );
}
