import { isPlatformBrowser } from '@angular/common';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    Inject,
    NgZone,
    PLATFORM_ID,
} from '@angular/core';

import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow';
import { COUNTRY_CORDS } from 'src/libs/consts';

@Component({
    selector: 'app-world',
    templateUrl: './world.component.html',
    styleUrls: ['./world.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorldComponent implements AfterViewInit {
    private chart!: any;

    private root!: am5.Root;

    private countryCords = COUNTRY_CORDS;

    constructor(
        @Inject(PLATFORM_ID) private platformId: any,
        private zone: NgZone,
    ) {}

    browserOnly(f: () => void) {
        if (isPlatformBrowser(this.platformId)) {
            this.zone.runOutsideAngular(() => {
                f();
            });
        }
    }

    ngAfterViewInit() {
        this.browserOnly(() => {
            const root = am5.Root.new('world');

            root.setThemes([am5themes_Animated.new(root)]);

            this.chart = root.container.children.push(
                am5map.MapChart.new(root, {
                    panX: 'rotateX',
                    panY: 'rotateY',
                    minZoomLevel: 0.5,
                    maxZoomLevel: 1,
                    projection: am5map.geoOrthographic(),
                    paddingBottom: 0,
                    paddingTop: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                }),
            );

            this.chart.series.push(
                am5map.MapPolygonSeries.new(root, {
                    geoJSON: am5geodata_worldLow,
                    fill: am5.color(0x526ed3),
                }),
            );

            const pointSeries = this.chart.series.push(
                am5map.MapPointSeries.new(root, {
                    polygonIdField: 'country',
                }),
            );
            pointSeries.bullets.push(
                (root: any, series: any, dataItem: any) => {
                    const circle = am5.Circle.new(root, {
                        layer: 2,
                        radius: 7,
                        tooltipText: dataItem.dataContext.title,
                        cursorOverStyle: 'pointer',
                        tooltipY: 0,
                        fill: am5.color(0xffffff),
                        stroke: root.interfaceColors.get('background'),
                        strokeWidth: 2,
                        draggable: false,
                    });
                    return am5.Bullet.new(root, {
                        sprite: circle,
                    });
                },
            );

            this.markCountries(pointSeries);

            const graticuleSeries = this.chart.series.push(
                am5map.GraticuleSeries.new(root, {}),
            );
            graticuleSeries.mapLines.template.setAll({
                strokeOpacity: 0.1,

                stroke: root.interfaceColors.get('primaryButtonHover'),
            });

            const backgroundSeries = this.chart.series.push(
                am5map.MapPolygonSeries.new(root, {}),
            );

            backgroundSeries.mapPolygons.template.setAll({
                fill: am5.color(0x526ed3),
                fillOpacity: 0.3,
                strokeOpacity: 0,
                layer: 1,
            });

            backgroundSeries.data.push({
                geometry: am5map.getGeoRectangle(90, 180, -90, -180),
            });

            this.chart.animate({
                key: 'rotationX',
                from: 0,
                to: 360,
                duration: 30000,
                loops: Infinity,
            });

            this.chart.appear(1000, 100);
        });
    }

    ngOnDestroy() {
        this.browserOnly(() => {
            if (this.root) {
                this.root.dispose();
            }
        });
    }

    private markCountries(pointSeries: any): void {
        this.countryCords.forEach((country) =>
            pointSeries.data.push({
                geometry: {
                    type: 'Point',
                    coordinates: [country.longitude, country.latitude],
                },
                title: country.title,
            }),
        );
    }
}
