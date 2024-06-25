
export interface HomeHeaderProps {
    onLogout?: () => void;
  }
  
export interface HomeCardProps {
    address: string;
    image: string;
    description: string;
    onPress: () => void;

}