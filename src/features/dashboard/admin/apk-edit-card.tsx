import { ApplicationWithImages } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { EditApkForm } from "./apk-edit-form";

export const EditApkCard = ({ data }: { data: ApplicationWithImages }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit Android Application</CardTitle>
        <CardDescription>
          Edit a existing Android application to the database
        </CardDescription>
      </CardHeader>
      <CardContent>
        <EditApkForm data={data} />
      </CardContent>
    </Card>
  );
};
