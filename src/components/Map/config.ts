import { LatLngExpression } from 'leaflet'

export type MapView = {
  center: LatLngExpression
  zoom: number
  setView(center: LatLngExpression, zoom?: number): void
}

export const mapView: MapView = {
  center: [0, 0],
  zoom: 3,
  setView(center: LatLngExpression, zoom?: number) {
    this.center = center
    if (zoom) {
      this.zoom = zoom
    }
  }
}
