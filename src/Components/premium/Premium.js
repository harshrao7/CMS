import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

function CheckIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-3 w-3"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
            />
        </svg>
    );
}

export function Premium() {
    return (
        <div className="flex gap-20">
            <Card color="gray" variant="gradient" className="w-full max-w-[20rem] p-8">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                >
                    <Typography
                        variant="small"
                        color="white"
                        className="font-normal uppercase"
                    >
                        standard
                    </Typography>
                    <Typography
                        variant="h1"
                        color="white"
                        className="mt-6 flex justify-center gap-1 text-5xl font-normal"
                    >
                        <span className="mt-2 text-2xl">Rs.</span>2000{" "}
                        <span className="self-end text-3xl">/mo</span>
                    </Typography>
                </CardHeader>
                <CardBody className="p-0 h-48">
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <CheckIcon />
                            </span>
                            <Typography className="font-normal">2 team members</Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <CheckIcon />
                            </span>
                            <Typography className="font-normal">100+ components</Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <CheckIcon />
                            </span>
                            <Typography className="font-normal">20+ built-in pages</Typography>
                        </li>
                    </ul>
                </CardBody>
                <CardFooter className="mt-12 p-0">
                    <Button
                        size="lg"
                        color="white"
                        className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                        ripple={false}
                        fullWidth={true}
                    >
                        Buy Now
                    </Button>
                </CardFooter>
            </Card>
            <Card color="gray" variant="gradient" className="w-full max-w-[20rem] p-8">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                >
                    <Typography
                        variant="small"
                        color="white"
                        className="font-normal uppercase"
                    >
                        Plus
                    </Typography>
                    <Typography
                        variant="h1"
                        color="white"
                        className="mt-6 flex justify-center gap-1 text-5xl font-normal"
                    >
                        <span className="mt-2 text-2xl">Rs.</span>3500{" "}
                        <span className="self-end text-2xl">/mo</span>
                    </Typography>
                </CardHeader>
                <CardBody className="p-0 h-48">
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <CheckIcon />
                            </span>
                            <Typography className="font-normal">3 team members</Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <CheckIcon />
                            </span>
                            <Typography className="font-normal">150+ components</Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <CheckIcon />
                            </span>
                            <Typography className="font-normal">30+ built-in pages</Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <CheckIcon />
                            </span>
                            <Typography className="font-normal">1 year free updates</Typography>
                        </li>
                    </ul>
                </CardBody>
                <CardFooter className="mt-12 p-0">
                    <Button
                        size="lg"
                        color="white"
                        className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                        ripple={false}
                        fullWidth={true}
                    >
                        Buy Now
                    </Button>
                </CardFooter>
            </Card>
            <Card color="gray" variant="gradient" className="w-full max-w-[20rem] p-8">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                >
                    <Typography
                        variant="small"
                        color="white"
                        className="font-normal uppercase"
                    >
                        Premium
                    </Typography>
                    <Typography
                        variant="h1"
                        color="white"
                        className="mt-6 flex justify-center gap-1 text-5xl font-normal"
                    >
                        <span className="mt-2 text-2xl">Rs.</span>5000{" "}
                        <span className="self-end text-2xl">/mo</span>
                    </Typography>
                </CardHeader>
                <CardBody className="p-0 h-48">
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <CheckIcon />
                            </span>
                            <Typography className="font-normal">5 team members</Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <CheckIcon />
                            </span>
                            <Typography className="font-normal">200+ components</Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <CheckIcon />
                            </span>
                            <Typography className="font-normal">40+ built-in pages</Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <CheckIcon />
                            </span>
                            <Typography className="font-normal">1 year free updates</Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <CheckIcon />
                            </span>
                            <Typography className="font-normal">
                                Life time technical support
                            </Typography>
                        </li>
                    </ul>
                </CardBody>
                <CardFooter className="mt-12 p-0">
                    <Button
                        size="lg"
                        color="white"
                        className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                        ripple={false}
                        fullWidth={true}
                    >
                        Buy Now
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}