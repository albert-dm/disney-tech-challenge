import LogoImage from "../../static/image/logo.png";
import AvatarImage from "../../static/image/avatar.png";
import { Link, useNavigate, useSearch } from "@tanstack/react-router";
import { debounce } from "../../helpers/debounce";
import { useEffect, useRef } from "react";

export function PageHeader() {
  const navigate = useNavigate();
  const searchInput = useRef<HTMLInputElement>(null);
  const searchText = debounce((text: string) => {
    if (text.length >= 3) {
    navigate({to: `/search?query=${text}`});
    } else {
      navigate({to: `/`});
    }
  }, 300);

  const { query } = useSearch({
    strict: false,
  });

  useEffect(() => {
    if (!query && searchInput.current) {
      searchInput.current.value = "";
    }
  }, [query]);

  const handelSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const search = e.target.value;
    searchText(search);
  }
  return (
    <header className="container flex justify-between items-center p-4 m-auto gap-10">
      <Link to="/">
        <img src={LogoImage} alt="logo" />
      </Link>
      <input ref={searchInput} type="text" placeholder="Find a character..." value={query} className="w-full bg-background py-2 px-4 rounded-3xl" onChange={handelSearch} />
      <Link to="/profile">
        <img src={AvatarImage} alt="Go to Profile" />
      </Link>
    </header>
  );
}
