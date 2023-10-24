import { INITIAL_CENTER, INITIAL_ZOOM } from "@/hooks/useMap";
import { NaverMap } from "@/types/map";
import { Coordinates } from "@/types/store";
import Script from "next/script";
import React, { useEffect, useRef } from "react";

type Props = {
  mapId?: string;
  initialCenter?: Coordinates;
  initialZoom?: number;
  onLoad?: (map: NaverMap) => void;
};

const Map = ({
  mapId = 'map',
  initialCenter = INITIAL_CENTER,
  initialZoom = INITIAL_ZOOM,
  onLoad,
}: Props) => {
  const mapRef = useRef<NaverMap | null>(null);
  const initializeMap = () => {
    const mapOptions = {//어떤 지도 컨트롤이 필요한지 설정(https://navermaps.github.io/maps.js.ncp/docs/naver.maps.html#.MapOptions)
      center: new window.naver.maps.LatLng(...initialCenter), //지도 중심 좌표 설정
      zoom: initialZoom,//초기 줌 레벨
      minZoom: 9, //설정하지 않으면 최소 줌 레벨=초기 줌 레벨
      scaleControl: false, //지도 축적 컨트롤 표시 여부
      mapDataControl: false,
      logoControlOptions: {
        position: naver.maps.Position.BOTTOM_LEFT
      }
    }

    //지도 초기화, 지도 유형 설정
    const map = new naver.maps.Map(mapId, mapOptions);
    mapRef.current = map;

    if (onLoad) {
      onLoad(map);
    }
  };

  useEffect(() => {
    return () => {
      //map 컴포넌트가 unmount되면 해당 map 인스턴스 파괴
      mapRef.current?.destroy();
    }
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`}
        onReady={initializeMap}
      />
      <div id={mapId} style={{ width: '100%', height: '100%' }} />
    </>
  );
};

export default Map;
