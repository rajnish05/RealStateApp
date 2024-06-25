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
    onPress?: () => void;
}

export interface BreadcrumbsProps {
    breadcrumbs: { index: number; slug: string; title: string; type: string; }[];
}

export interface HomeDetailScreenProps {
    route: {
        params: {
            homeData: {
                address: string;
                description: string;
                width: number;
                height: number;
                views: number;
                breadcrumbs: { index: number; slug: string; title: string; type: string; }[];
                image: string;
                unlocked?: boolean;
                lat?:number
                long:number
            }

        };
    };
}