import React from "react";
import Map from "./Map";
import { NaverMap } from "../../types/map";
import useMap from "@/hooks/useMap";
import Markers from "./Markers";

const MapSection = () => {
  //지도에 마커를 찍기 위해서 마커에서 네이버 맵 객체에 (맵 컴포넌트에서 만든 'MAP'이란 객체를 전역 상태로 공유하여) 접근할 수 있어야 함
  const { initializeMap } = useMap();
  const onLoadMap = (map: NaverMap) => {
    //swr을 이용하여 map을 전역으로 관리하게 함
    initializeMap(map);
  }
  return (
    <>
      <Map onLoad={onLoadMap} />
      <Markers />
    </>
  )
};
export default MapSection;
