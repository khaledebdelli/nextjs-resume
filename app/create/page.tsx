"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const [techno, setTechno] = useState("");
  const [moamoe, setMoemoe] = useState("");
  const [profil, setProfil] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);

    await fetch("/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        techno, moamoe, profil, prenom, nom, email,
      }),
    }).then((res) => {
      // console.log(res);
    }).catch((e) => {
      console.error(e);
    })

    setIsLoading(false);
    router.push("/");
  };
  return (
    <form
      className="w-[500px] mx-auto mt-20 flex flex-col gap-2"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="techno"
        value={techno}
        onChange={(e) => setTechno(e.target.value)}
        className="border w-full p-2 rounded-md"
      />
      <input
        type="text"
        placeholder="MOA/MOE"
        value={moamoe}
        onChange={(e) => setMoemoe(e.target.value)}
        className="border w-full p-2 rounded-md"
      />
      <input
        type="text"
        placeholder="Profil"
        value={profil}
        onChange={(e) => setProfil(e.target.value)}
        className="border w-full p-2 rounded-md"
      />
      <input
        type="text"
        placeholder="Prénom"
        value={prenom}
        onChange={(e) => setPrenom(e.target.value)}
        className="border w-full p-2 rounded-md"
      />
      <input
        type="text"
        placeholder="Nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        className="border w-full p-2 rounded-md"
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border w-full p-2 rounded-md"
      />
      <button disabled={isLoading}>{isLoading ? "Loading..." : "Submit"}</button>
    </form>
  );
};

export default Page;