import PageWrapper from "../components/PageWrapper";
import axios from "axios";
import { useEffect, useState } from "react";

const More = () => {
    const [channel, SetChannel] = useState();
    const [channelS, SetChannelS] = useState();

    useEffect(() => {
        axios
            .get(
                "https://www.googleapis.com/youtube/v3/channels?key=AIzaSyDuKADJb4WqCLcsKam2fl9wvJfE8CuS3FY&id=UCNXf1lL9scGBdNRabwZy7BQ&part=snippet,id&order=date&maxResults=1"
            )
            .then((res) => {
                SetChannel(res.data.items[0].snippet);
            });

        axios
            .get(
                "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCNXf1lL9scGBdNRabwZy7BQ&key=AIzaSyDuKADJb4WqCLcsKam2fl9wvJfE8CuS3FY"
            )
            .then((res) => {
                SetChannelS(res.data.items[0]);
            });
    }, []);

    return (
        <PageWrapper title="More" className="mt-40">
            <div className="max-w-[60rem] text-2xl">
                I'm a youtuber about translating Japanese songs and this is my
                youtube channel
            </div>

            <a
                href="https://www.youtube.com/channel/UCNXf1lL9scGBdNRabwZy7BQ"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center items-center text-center mt-4"
            >
                <div>
                    <div
                        className="avatar ring-2 ring-white"
                        style={{
                            backgroundImage: `url(${channel?.thumbnails.high.url})`,
                        }}
                    />
                    <div />
                    <div className="text-2xl font-semibold">
                        {channel?.title}
                    </div>
                    <div className="text-xl">
                        {channelS?.statistics.subscriberCount} subscribers
                    </div>
                </div>
            </a>
        </PageWrapper>
    );
};

export default More;
