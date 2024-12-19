import { z } from "zod";

import { db } from "@/lib/db";
import {
  addApkFormSchema,
  editApkFormSchema,
} from "@/features/dashboard/admin/schema";
import { appCategory, gameCategory } from "@/constant";

export const createApplication = async (
  v: z.infer<typeof addApkFormSchema>
) => {
  try {
    const data = await db.application.create({
      data: {
        age: v.age,
        category: v.category,
        developer: v.developer,
        download: v.download,
        features: v.features,
        icon: v.icon,
        link: v.link,
        id: v.package_name,
        name: v.name,
        rating: v.ratings,
        version: v.version,
      },
    });

    if (v.images) {
      const imagesData = [];

      for (let i = 0; i < v.images.length; i++) {
        if (!!v.images[i]) {
          imagesData.push({
            applicationId: data.id,
            url: v.images[i],
          });
        }
      }

      if (imagesData.length > 0) {
        await db.images.createMany({
          data: imagesData,
        });
      }
    }

    return data;
  } catch {
    return null;
  }
};

export const updateApplication = async (
  v: z.infer<typeof editApkFormSchema>,
  id: string
) => {
  try {
    const data = await db.application.update({
      where: { id },
      data: {
        age: v.age,
        category: v.category,
        developer: v.developer,
        download: v.download,
        features: v.features,
        icon: v.icon,
        link: v.link,
        name: v.name,
        rating: v.ratings,
        version: v.version,
      },
    });

    await db.images.deleteMany({
      where: {
        applicationId: id,
      },
    });

    if (v.images) {
      const imagesData = [];

      for (let i = 0; i < v.images.length; i++) {
        if (!!v.images[i]) {
          imagesData.push({
            applicationId: id,
            url: v.images[i],
          });
        }
      }

      if (imagesData.length > 0) {
        await db.images.createMany({
          data: imagesData,
        });
      }
    }

    return data;
  } catch {
    return null;
  }
};

export const findApplicationById = async ({ id }: { id: string }) => {
  try {
    return await db.application.findUnique({
      where: { id },
      include: {
        images: true,
      },
    });
  } catch {
    return null;
  }
};

export const getRelatedApps = async (category: string) => {
  try {
    return await db.application.findMany({
      where: { category },
      take: 5,
    });
  } catch {
    return null;
  }
};

export const getTopDownloadApplicationsAll = async () => {
  try {
    return await db.application.findMany({
      take: 6,
      orderBy: {
        clicked: "desc",
      },
    });
  } catch {
    return null;
  }
};

export const getTopDownloadApplications = async (isGame?: boolean) => {
  let categoryValues = appCategory.map((category) => category.value);

  if (isGame) {
    categoryValues = gameCategory.map((category) => category.value);
  }

  try {
    return await db.application.findMany({
      take: 10,
      where: {
        category: {
          in: categoryValues,
        },
      },
      orderBy: {
        clicked: "desc",
      },
    });
  } catch {
    return null;
  }
};

export const getTopDownloadApplicationsMore = async (isGame?: boolean) => {
  let categoryValues = appCategory.map((category) => category.value);

  if (isGame) {
    categoryValues = gameCategory.map((category) => category.value);
  }

  try {
    return await db.application.findMany({
      take: 100,
      where: {
        category: {
          in: categoryValues,
        },
      },
      orderBy: {
        clicked: "desc",
      },
    });
  } catch {
    return null;
  }
};

export const getApplicationByCategoryPage = async ({
  category,
  page,
}: {
  category: string;
  page: number;
}) => {
  try {
    return await db.application.findMany({
      take: 10,
      skip: 9 * (page - 1),
      where: {
        category,
      },
    });
  } catch {
    return null;
  }
};

export const getApplicationBySearch = async (q: string) => {
  try {
    return await db.application.findMany({
      take: 10,
      where: {
        OR: [
          {
            name: {
              contains: q,
            },
          },
          {
            id: {
              contains: q,
            },
          },
          {
            developer: {
              contains: q,
            },
          },
        ],
      },
    });
  } catch {
    return null;
  }
};

export const getSportsApps = async () => {
  try {
    return await db.application.findMany({
      where: {
        category: "sports",
      },
      take: 6,
    });
  } catch {
    return null;
  }
};

export const getSocialApps = async () => {
  try {
    return await db.application.findMany({
      where: {
        category: "social",
      },
      take: 6,
    });
  } catch {
    return null;
  }
};

export const getApplicationByAge = async (age: number) => {
  const categoryValues = gameCategory.map((category) => category.value);
  try {
    return await db.application.findMany({
      where: {
        age: {
          lte: age,
        },
        category: {
          in: categoryValues,
        },
      },
      take: 6,
    });
  } catch {
    return null;
  }
};
