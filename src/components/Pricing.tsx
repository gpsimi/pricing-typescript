import PlanCard from "./PlanCard";

export default function Pricing() {
    return (
        <div className="flex flex-col items-center bg-black p-4">
            <div className="mb-2 mt-12 text-center">
                <h1 className="mb-4 text-7xl font-black text-white">Pricing</h1>
                <p className="text-lg text-white">
                    Choose the right pricing for you to get started on your project
                </p>
            </div>
            <div className="flex flex-col gap-8 p-10 xl:flex-row">
                <PlanCard
                    color="#78E3FC"
                    name="Basic"
                    description="Get started with basic plan"
                    features={["1 User", "2 Projects", "5 GB Storage"]}
                    btnText="Start Free Plan"
                />
                <PlanCard
                    color="#FCD638"
                    name="Pro"
                    price="7"
                    description="Get more advanced"
                    features={["3 User", "5 Projects", "10 GB Storage", 'Custom Domain']}
                    btnText="Start Pro Trial"
                />
                <PlanCard
                    color="#FFB5BA"
                    name="Business"
                    price="24"
                    description="For big business"
                    features={["Unilimited User", "Unlimited Projects", "100 GB Storage", 'Custom Domain', 'Analytic Tools']}
                    btnText="Start Business Plan"
                />
            </div>
        </div>
    );
}

