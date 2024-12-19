import { findApplicationById } from "@/data/application";
import { EditApkCard } from "@/features/dashboard/admin/apk-edit-card";
import { redirect } from "next/navigation";

const EditPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const data = await findApplicationById({ id });

  if (!data) {
    return redirect("/admin/list");
  }

  return <EditApkCard data={data} />;
};

export default EditPage;
