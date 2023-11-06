import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
    const cvs = await prisma.cv.findMany({});
    return NextResponse.json({ cvs });
};

export const POST = async (req: NextRequest) => {
    const { techno, moamoe, profil, prenom, nom, email, annee, telephone, disponibilite, typeContrat, fourchette, mobilite, statue, commentaire, source, localisation } = await req.json();

    const cv = await prisma.cv.create({
        data: {
            techno, moamoe, profil, prenom, nom, email, annee, telephone, disponibilite, typeContrat, fourchette, mobilite, statue, commentaire, source, localisation
        },
    });

    return NextResponse.json({ cv });
};

export const DELETE = async (req: NextRequest) => {
    const url = new URL(req.url).searchParams;
    const id = Number(url.get('id')) || 0
    console.log("id=" + id)

    const cv = await prisma.cv.delete({
        where: {
            id: id
        }
    })

    if (!cv) {
        return NextResponse.json({ message: "Error" }, { status: 500 })
    }

    return NextResponse.json({ cv });
}


export const PUT = async (req: NextRequest) => {
    const { techno, moamoe, profil, prenom, nom, email, annee, telephone, disponibilite, fourchette, mobilite, statue, commentaire, source, localisation, id } = await req.json();

    const cv = await prisma.cv.update({
        where: {
            id: Number(id)
        },
        data: {
            techno, moamoe, profil, prenom, nom, email, annee, telephone, disponibilite, fourchette, mobilite, statue, commentaire, source, localisation
        },
    });

    return NextResponse.json({ cv });
};