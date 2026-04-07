"use client";

import { useState } from "react";
import BoringAvatar from "boring-avatars";
import Image from "next/image";

export type AvatarProps = {
    userId: number;
    userName: string
    size: number;
};

export const Avatar = ({ userId, userName, size }: AvatarProps) => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    return (
        <div className="user-avatar" style={{ width: size, height: size }}>
            <Image src={`https://i.pravatar.cc/${size}?img=${userId}`}
                alt={userName}
                width={size}
                height={size}
                placeholder="empty"
                className="image"
                style={{ opacity: loaded ? 1 : 0 }}
                onLoad={() => setLoaded(true)}
                onError={() => setError(true)}
            />
            <div className="placeholder">
                {!loaded || error ?
                    <BoringAvatar
                        size={size}
                        name={userName}
                        variant="marble"
                        colors={[
                            "#92A1C6",
                            "#146A7C",
                            "#F0AB3D",
                            "#C271B4",
                            "#C20D90",
                        ]}
                    /> : null
                }
            </div>
        </div>
    );
}