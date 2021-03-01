/*
 * @Descripttion: 
 * @Author: JayShen
 * @Date: 2021-03-01 20:05:08
 * @LastEditors: JayShen
 * @LastEditTime: 2021-03-01 20:13:29
 */
import echarts from "echarts";
// 百分比环图
export const FeedbackOptions = params => ({
    // title: {
    //     text: `${params.number}%`,
    //     left: '45%',
    //     top: '40%',
    //     textAlign: 'center',
    //     textStyle: {
    //         fontSize: '16',
    //         fontWeight: '500',
    //         color: '#909dff',
    //         textAlign: 'center',
    //     },
    // },
    series: [{
        type: 'pie',
        startAngle: 0,
        radius: ['80%', '70%'],
        center: ['50%', '50%'],
        data: [{
                value: params.number,
                name: params.title,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#5a8bfa',
                            },
                            {
                                offset: 1,
                                color: '#831bdb',
                            },
                        ]),
                        shadowColor: 'rgba(175,143,230,.5)',
                        shadowBlur: 10,
                    },
                },
                label: {
                    show: false,
                },
                labelLine: {
                    normal: {
                        smooth: true,
                        lineStyle: {
                            width: 0,
                        },
                    },
                },
                hoverAnimation: false,
            },
            {
                label: {
                    show: false,
                },
                labelLine: {
                    normal: {
                        smooth: true,
                        lineStyle: {
                            width: 0,
                        },
                    },
                },
                value: 100 - params.number,
                hoverAnimation: true,
                itemStyle: {
                    color: 'rgba(79,76,192, 0.3)',
                },
            },
        ],
    }, ],
});