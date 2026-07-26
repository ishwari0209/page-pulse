import {
    Clock,
    FileText,
    Heading,
    Image,
    CheckCircle
} from "lucide-react";

export default function AuditResult({ data }) {

    const cards = [
        {
            title: "Status",
            value: data.status,
            icon: <CheckCircle className="text-green-500"/>
        },
        {
            title: "Response Time",
            value: `${data.response_time} ms`,
            icon: <Clock className="text-blue-500"/>
        },
        {
            title: "H1 Count",
            value: data.h1_count,
            icon: <Heading className="text-purple-500"/>
        },
        {
            title: "Missing Alt",
            value: data.images_missing_alt,
            icon: <Image className="text-red-500"/>
        }
    ];

    return (

        <div className="mt-12">

            <h2 className="text-3xl font-bold mb-8">
                Audit Report
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                {cards.map((card,index)=>(

                    <div
                        key={index}
                        className="rounded-2xl bg-white shadow-lg p-6 hover:-translate-y-2 transition"
                    >

                        <div className="flex justify-between items-center">

                            <div>

                                <p className="text-gray-500">
                                    {card.title}
                                </p>

                                <h2 className="text-3xl font-bold mt-2">
                                    {card.value}
                                </h2>

                            </div>

                            {card.icon}

                        </div>

                    </div>

                ))}

            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">

                <div className="bg-white rounded-2xl shadow-lg p-6">

                    <div className="flex items-center gap-2 mb-3">

                        <FileText className="text-blue-600"/>

                        <h3 className="font-bold text-xl">
                            Page Title
                        </h3>

                    </div>

                    <p>
                        {data.title}
                    </p>

                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6">

                    <div className="flex items-center gap-2 mb-3">

                        <FileText className="text-purple-600"/>

                        <h3 className="font-bold text-xl">
                            Meta Description
                        </h3>

                    </div>

                    <p>
                        {data.meta_description || "Not Found"}
                    </p>

                </div>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

                <h3 className="font-bold text-xl">
                    Word Count
                </h3>

                <p className="text-5xl font-bold text-blue-600 mt-4">
                    {data.word_count}
                </p>

            </div>

        </div>

    );
}