import { MAP_KEY } from "@/hooks/useMap";
import { STORE_KEY } from "@/hooks/useStores";
import { NaverMap } from "@/types/map";
import { Store } from "@/types/store";
import React from "react";
import useSWR from "swr";
import Marker from "./Marker";

function Markers() {
  const { data: map } = useSWR<NaverMap>(MAP_KEY);
  const { data: stores } = useSWR<Store[]>(STORE_KEY);
  //swr에서 useSWR라는 hook을 import하고 이 훅의 인자로 MAP_KEY를 주면 전역 상태로 관리되고 있는 Map데이터들을 얻을 수 있다

  if (!map || !stores) return null;
  //둘 중 하나라도 없으면 null 리턴
  //둘 다 있을 경우 매장을 하나하나 돌면서 마커 컴포넌트를 렌더링
  return (
    <>
      {stores.map((store) => {
        return (
          <Marker
            map={map}
            coordinates={store.coordinates}
            icon={generateStoreMarkerIcon(store.season)}
            key={store.nid}
          />
        );
      })}
    </>
  );
}

export default Markers;

const MARKER_HEIGHT = 64;
const MARKER_WIDTH = 54;
const NUMBER_OF_MARKER = 13;
const SCALE = 2 / 3;

const SCALED_MARKER_WIDTH = MARKER_WIDTH * SCALE;
const SCALED_MARKER_HEIGHT = MARKER_HEIGHT * SCALE;

export function generateStoreMarkerIcon(markerIndex: number): ImageIcon {
  /** https://navermaps.github.io/maps.js.ncp/docs/tutorial-8-marker-retina-sprite.example.html */
  return {
    url: 'images/markers.png',
    size: new naver.maps.Size(SCALED_MARKER_WIDTH, SCALED_MARKER_HEIGHT),
    origin: new naver.maps.Point(SCALED_MARKER_WIDTH * markerIndex, 0),
    scaledSize: new naver.maps.Size(
      //원본 이미지를 원하는 스케일로 줄이기 위해
      SCALED_MARKER_WIDTH * NUMBER_OF_MARKER,
      SCALED_MARKER_HEIGHT
    ),
  };
}