import { homeDetailProps } from "../../../utils/HomeDetail";

export interface HeaderProps {
    address: string;
}

export interface ImageDisplayProps {
    imageUrl: string;
}

export interface DetailsProps {
    description: string;
    width: number;
    height: number;
    views: number;
}

export interface UnlockProps {
    unlocked?: Boolean;
    showUnlock?: Boolean;
    onPress?: () => void;
}

export interface BreadcrumbsProps {
    breadcrumbs: { index: number; slug: string; title: string; type: string; }[];
}

export interface HomeDetailScreenProps {
    route: {
        params: {
            homeData: {
                id: string;
                address: string;
                description: string;
                width: number;
                height: number;
                views: number;
                breadcrumbs: { index: number; slug: string; title: string; type: string; }[];
                image: string;
                lat?: number
                long: number
            }

        };
    };
}

export interface locationProps {
    latitude: number | null;
    longitude: number | null
}

export interface HomeDescriptionProps {
    home: homeDetailProps;
    unlocked: Boolean;
}