import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { SearchApplication } from "./search-apk";
import { ApkList } from "./apk-list";

export const ListAppCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>List of All Android Application</CardTitle>
        <CardDescription>List of All Android Application</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <SearchApplication />
          <ApkList />
        </div>
      </CardContent>
    </Card>
  );
};
