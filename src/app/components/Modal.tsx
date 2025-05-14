// // components/Modal.tsx
// "use client";

// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// export default function Modal({ children }: { children: React.ReactNode }) {
//   const router = useRouter();

//   useEffect(() => {
//     const handleEscape = (e: KeyboardEvent) => {
//       if (e.key === "Escape") {
//         router.back();
//       }
//     };

//     document.addEventListener("keydown", handleEscape);

//     return () => {
//       document.removeEventListener("keydown", handleEscape);
//     };
//   }, [router]);

//   return (
//     <div
//       className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center"
//       onClick={() => router.back()}
//     >
//       <div
//         className="bg-white rounded-lg p-8 max-w-xl w-full"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {children}
//         <button
//           className="mt-4 bg-gray-800 text-white px-4 py-2 rounded"
//           onClick={() => router.back()}
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// }
