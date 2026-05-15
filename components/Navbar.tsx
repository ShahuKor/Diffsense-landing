import Link from "next/link";
import { FaGithub } from "react-icons/fa";
export default function Navbar() {
  return (
    <div className="border-dashed border-b border-white/30 py-4 px-6 flex justify-between items-center">
      <h3 className=" tracking-widest text-sm  text-neutral-100">DiffSense</h3>
      <Link href="https://github.com/ShahuKor/DiffSense">
        <button className=" border flex items-center gap-2 border-white/20 bg-transparent px-6 py-3.5 text-[9px] font-semibold uppercase tracking-widest text-white/60 transition-colors duration-150 hover:border-white/50 hover:text-white sm:py-3 sm:text-[10px]">
          GitHub
          <FaGithub />
        </button>
      </Link>
    </div>
  );
}
