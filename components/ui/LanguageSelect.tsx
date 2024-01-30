"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// import {
//   LanguagesSupported,
//   LanguagesSupportedMap,
//   useLanguageStore,
//   useSubscriptionStore,
// } from "@/store/store";

import { usePathname } from "next/navigation";
import Link from "next/link";
import LoadingSpinner from "./LoadingSpinner";

function LanguageSelect() {
  //   const [language, setLanguage, getLanguages, getNotSupportedLanguages] =
  //     useLanguageStore((state) => [
  //       state.language,
  //       state.setLanguage,
  //       state.getLanguages,
  //       state.getNotSupportedLanguagess,
  //     ]);
  //   const subscription = useSubscriptionStore((state) => state.subscription);
  //   const isPro =
  //     subscription?.role === "pro" && subscription?.status === "active";

  //   const pathName = usePathname();
  //   const isChatPage = pathName.includes("/chat");
  return (
    // isChatPage && (
    //   <div>
    //     <Select
    //       onValueChange={(value: LanguagesSupported) => setLanguage(value)}
    //     >
    //       <SelectTrigger className="w-[150px] text-black dark:text-white">
    //         <SelectValue
    //           placeholder={LanguagesSupportedMap[language]}
    //           className=""
    //         />
    //       </SelectTrigger>
    //       <SelectContent>
    //         {subscription === undefined ? (
    //           <LoadingSpinner />
    //         ) : (
    //           <>
    //             {getLanguages(isPro).map((language) => (
    //               <SelectItem key={language} value={language}>
    //                 {LanguagesSupportedMap[language]}
    //               </SelectItem>
    //             ))}
    //             {getNotSupportedLanguages(isPro).map((language) => (
    //               <Link href={"/register"} key={language} prefetch={false}>
    //                 <SelectItem
    //                   key={language}
    //                   value={language}
    //                   disabled
    //                   className="bg-gray-300/50 text-gray-300 dark:text-white py-2 my-1"
    //                 >
    //                   {LanguagesSupportedMap[language]} (PRO)
    //                 </SelectItem>
    //               </Link>
    //             ))}
    //           </>
    //         )}
    //       </SelectContent>
    //     </Select>
    //   </div>
    // )
    <Select>
      <SelectTrigger className="w-[150px] text-black dark:text-white">
        <SelectValue placeholder="English" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">German</SelectItem>
        <SelectItem value="dark">French</SelectItem>
        <SelectItem value="system">Hindi</SelectItem>
        <SelectItem value="system">Spanish</SelectItem>
        <SelectItem value="system">Kinyarwanda</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default LanguageSelect;
