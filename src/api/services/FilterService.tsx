import { get } from "../axios";

export async function GetSportFilters() {
  const url = "/filters/sport";
  const response = await get(url);
  return response;
}

export async function GetSportExperienceFilters() {
  const url = "/filters/sport-experience";
  const response = await get(url);
  return response;
}