import { useState } from "react";
import { User, UserSchema } from "../../schemas/user";
import { Button } from "../button";
import { ZodError } from "zod";

interface ProfileFormProps {
  user: User | null;
  updateUser: (user: User) => void;
  cancelEdit: () => void;
}

export function ProfileForm({updateUser, cancelEdit, user}: ProfileFormProps) {
  const [errors, setErrors] = useState<ZodError | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form)

    const { success, data: updatedUser, error } = UserSchema.safeParse({
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      birthDate: data.get("birthDate"),
      city: data.get("city"),
      state: data.get("state"),
      favoriteCharacter: data.get("favoriteCharacter"),
      favoriteRide: data.get("favoriteRide"),
      favoriteMovie: data.get("favoriteMovie"),
      favoritePark: data.get("favoritePark"),
      updatedAt: new Date().toISOString(),
    });

    if (!success) {
      setErrors(error);
      return;
    }

    setErrors(null);

    updateUser(updatedUser);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-background py-24 px-16 flex flex-col items-start gap-6"
    >
      {
        errors && (
          <div className="bg-red-100 text-red-700 p-2 rounded">
            {errors.errors.map((error) => (
              <p key={error.message}>{error.message}</p>
            ))}
          </div>
        )
      }
      <div className="flex w-full gap-4">
        <div className="flex flex-1 flex-col items-start">
          <label htmlFor="firstName">First Name <span className="text-red-700">*</span></label>
          <input defaultValue={user?.firstName} type="text" id="firstName" name="firstName" className="w-80 h-8 border border-solid border-gray-300 rounded px-4" />
        </div>

        <div className="flex flex-1 flex-col items-start">
          <label htmlFor="lastName">Last Name <span className="text-red-700">*</span></label>
          <input defaultValue={user?.lastName} type="text" id="lastName" name="lastName" className="w-80 h-8 border border-solid border-gray-300 rounded px-4" />
        </div>
      </div>

      <div className="flex flex-col items-start">
        <label htmlFor="birthDate">Birth Date <span className="text-red-700">*</span></label>
        <input defaultValue={user?.birthDate} type="date" id="birthDate" name="birthDate" className="w-80 h-8 border border-solid border-gray-300 rounded px-4" />
      </div>

      <div className="flex flex-col items-start">
        <label htmlFor="city">City</label>
        <input defaultValue={user?.city} type="text" id="city" name="city" className="w-80 h-8 border border-solid border-gray-300 rounded px-4" />
      </div>

      <div className="flex flex-col items-start">
        <label htmlFor="state">State</label>
        <select defaultValue={user?.state} id="state" name="state" className="w-80 h-8 bg-white border border-solid border-gray-300 rounded">
          <option value="CA">California</option>
          <option value="FL">Florida</option>
          <option value="NY">New York</option>
          <option value="TX">Texas</option>
        </select>
      </div>

      <div className="flex flex-col items-start">
        <label htmlFor="favoriteCharacter">Favorite Disney Character</label>
        <input defaultValue={user?.favoriteCharacter} type="text" id="favoriteCharacter" name="favoriteCharacter" className="w-80 h-8 border border-solid border-gray-300 rounded px-4" />
      </div>

      <div className="flex flex-col items-start">
        <label htmlFor="favoriteRide">Favorite Disney Ride</label>
        <input defaultValue={user?.favoriteRide} type="text" id="favoriteRide" name="favoriteRide" className="w-80 h-8 border border-solid border-gray-300 rounded px-4" />
      </div>

      <div className="flex flex-col items-start">
        <label htmlFor="favoriteMovie">Favorite Disney Movie</label>
        <input defaultValue={user?.favoriteMovie} type="text" id="favoriteMovie" name="favoriteMovie" className="w-80 h-8 border border-solid border-gray-300 rounded px-4" />
      </div>

      <div className="flex flex-col items-start">
        <label htmlFor="favoritePark">Favorite Disney Park</label>
        <select defaultValue={user?.favoritePark} id="favoritePark" name="favoritePark" className="w-80 h-8 bg-white border border-solid border-gray-300 rounded">
          <option value="DisneyLand">DisneyLand</option>
          <option value="DisneyWorld">DisneyWorld</option>
          <option value="DisneyTokyo">DisneyTokyo</option>
          <option value="DisneyParis">DisneyParis</option>
        </select>
      </div>

      <div className="flex items-start gap-4">
        <Button variant="primary" type="submit">
          Update Profile
        </Button>
        <Button variant="secondary" type="button" onClick={() => cancelEdit()}>
          Cancel
        </Button>
      </div>
    </form>
  );
}