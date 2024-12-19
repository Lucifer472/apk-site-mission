import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { AddApkForm } from "./apk-add-form";

export const AddApkFormCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Android Application</CardTitle>
        <CardDescription>
          Add a new Android application to the database
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AddApkForm />
      </CardContent>
    </Card>
  );
};
