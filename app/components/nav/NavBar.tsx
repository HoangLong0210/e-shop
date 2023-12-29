import Link from "next/link";
import Container from "../Container";
import CartCount from "./CartCount";

const NavBar = () => {
  return (
    <div className="sticky top-0 w-full bg-slate-200 z-30 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex justify-between items-center gap-3 md:gap-0">
            <Link href={"/"} className="font-bold text-2xl">
              E-SHOP
            </Link>
            <div className="hidden md:block">Search</div>
            <div className="flex items-center gap-8 md:gap-12">
              <CartCount />
              <div>UserMenu</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
