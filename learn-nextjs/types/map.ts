import { Coordinates } from './store';

export type NaverMap = naver.maps.Map;
//@types/navermaps로 package.json에 설치한 네이버 제공 타입

export type Marker = {
  map: NaverMap;
  coordinates: Coordinates;
  icon: ImageIcon;
  onClick?: () => void;
};

export type ImageIcon = {
  url: string;
  size: naver.maps.Size;
  origin: naver.maps.Point;
  scaledSize?: naver.maps.Size;
};
