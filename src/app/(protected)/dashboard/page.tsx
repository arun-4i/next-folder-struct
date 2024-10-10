import BumpChart from "@/components/dashboard/bump-chart";
import RadialBarChart from "@/components/dashboard/radialbar-chart";
import { InputWithLabel, SearchData } from "@/components/dashboard/search";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <Card className="h-96">
          <CardHeader>
            <CardTitle>Weekly results</CardTitle>
          </CardHeader>
          <CardContent className="h-3/4 w-full p-0">
            <BumpChart />
          </CardContent>
        </Card>

        <Card className="h-96">
          <CardHeader>
            <CardTitle>Quaterly results</CardTitle>
          </CardHeader>
          <CardContent className="h-3/4 w-full p-0">
            <RadialBarChart />
          </CardContent>
        </Card>
      </div>
      <div>
        <Card className="h-96 w-full">
          <CardContent className="h-3/4 w-full p-0">
            <InputWithLabel />
            <SearchData />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
