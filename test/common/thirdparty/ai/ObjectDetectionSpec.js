import { ObjectDetection } from '../../../../src/common/thirdparty/ai/ObjectDetection';
import image from '../../../resources/img/baiduTileTest.png';
import * as tfconv from '@tensorflow/tfjs-converter';
import * as tfcore from '@tensorflow/tfjs-core';

describe('object detection', () => {
    var testImage;
    beforeAll(() => {
        testImage = window.document.createElement('img');
        testImage.id = 'demo';
        testImage.src = image.src;
        window.document.body.appendChild(testImage);
    });
    it('predict', (done) => {
        var params = {
            modelUrl: 'http://fakeurl/model.json',
            image: document.querySelector('#demo')
        };
        var objectDetection = new ObjectDetection(params);
        expect(objectDetection).not.toBeNull();
        expect(objectDetection.modelUrl).toBe(params.modelUrl);
        expect(objectDetection.backend).toBe('webgl');
        spyOn(tfconv, 'loadGraphModel').and.callFake((modelUrl) => {
            expect(modelUrl).toBe(params.modelUrl);
            const model = {
                //         const score = result[3].arraySync();
                // const bbox = result[2].arraySync();
                // const delta = result[1].arraySync();
                executeAsync: (x) => {
                    return [
                        {},
                        {
                            arraySync() {
                                return [
                                    [
                                        0.014996465295553207,
                                        -0.005549661815166473,
                                        0.018868351355195045,
                                        0.0038478553760796785,
                                        -1.4065897464752197,
                                        1.2165863513946533,
                                        -0.7276179790496826,
                                        -0.7450186014175415,
                                        -1.3390018939971924,
                                        1.1298272609710693,
                                        -1.5105446577072144,
                                        -1.1580911874771118,
                                        -1.138777256011963,
                                        1.233488917350769,
                                        -1.1473338603973389,
                                        -0.7814452648162842,
                                        -1.3604731559753418,
                                        1.1515929698944092,
                                        -1.878302812576294,
                                        -1.4733903408050537
                                    ],
                                    [
                                        0.006910852622240782,
                                        -0.012117361649870872,
                                        0.02522476762533188,
                                        0.031822144985198975,
                                        0.4516496956348419,
                                        -2.0572478771209717,
                                        -0.12931105494499207,
                                        -0.4696795344352722,
                                        0.5241969227790833,
                                        -1.963815689086914,
                                        -0.8261680603027344,
                                        -1.2213878631591797,
                                        0.6293782591819763,
                                        -1.7785935401916504,
                                        -0.5853957533836365,
                                        -0.8090624809265137,
                                        0.5221924781799316,
                                        -2.0046119689941406,
                                        -1.249629259109497,
                                        -1.5904039144515991
                                    ],
                                    [
                                        0.006832172628492117,
                                        -0.010556807741522789,
                                        0.02599049173295498,
                                        0.03839700296521187,
                                        0.22539550065994263,
                                        -2.100720167160034,
                                        0.07439754158258438,
                                        -0.7797300815582275,
                                        0.28391462564468384,
                                        -2.0509142875671387,
                                        -0.31881341338157654,
                                        -1.2256038188934326,
                                        0.5111784338951111,
                                        -1.8185503482818604,
                                        -0.36498773097991943,
                                        -0.9419813752174377,
                                        0.27936089038848877,
                                        -2.034104824066162,
                                        -0.7885333299636841,
                                        -1.6360290050506592
                                    ],
                                    [
                                        0.017906179651618004,
                                        -0.014135567471385002,
                                        0.00920072104781866,
                                        -0.0030233883298933506,
                                        1.4004359245300293,
                                        0.9114401936531067,
                                        -0.48377135396003723,
                                        -0.33891919255256653,
                                        1.373992681503296,
                                        0.8528228402137756,
                                        -1.2596344947814941,
                                        -1.0237011909484863,
                                        1.4973572492599487,
                                        1.0571496486663818,
                                        -0.9586055278778076,
                                        -0.6532567739486694,
                                        1.3624961376190186,
                                        0.8363305330276489,
                                        -1.8615936040878296,
                                        -1.5466535091400146
                                    ],
                                    [
                                        0.019055800512433052,
                                        -0.012653692625463009,
                                        0.02819553017616272,
                                        0.027628369629383087,
                                        -0.6628188490867615,
                                        -2.755730152130127,
                                        1.830820083618164,
                                        1.0004488229751587,
                                        -0.6299252510070801,
                                        -2.4036829471588135,
                                        0.4161564111709595,
                                        -0.4781663119792938,
                                        -0.38643762469291687,
                                        -2.0771021842956543,
                                        0.6849356889724731,
                                        0.12122413516044617,
                                        -0.5598263144493103,
                                        -2.4673633575439453,
                                        -0.1572691947221756,
                                        -0.8575574159622192
                                    ],
                                    [
                                        0.016454117372632027,
                                        -0.009337780065834522,
                                        0.0070007299073040485,
                                        0.0071678138338029385,
                                        -0.03780706226825714,
                                        -0.5586625337600708,
                                        -0.5437886118888855,
                                        -1.0169938802719116,
                                        -0.050696954131126404,
                                        -0.44895651936531067,
                                        -1.3155977725982666,
                                        -1.523443341255188,
                                        0.11663267016410828,
                                        -0.2921202778816223,
                                        -1.0197900533676147,
                                        -1.1152037382125854,
                                        -0.08885610103607178,
                                        -0.5220873355865479,
                                        -1.7353876829147339,
                                        -1.9094350337982178
                                    ],
                                    [
                                        0.030311603099107742,
                                        -0.008377213031053543,
                                        0.015387838706374168,
                                        -0.0014954307116568089,
                                        -0.7133060097694397,
                                        2.0091264247894287,
                                        -0.22391244769096375,
                                        -0.21368803083896637,
                                        -0.6405616998672485,
                                        1.9168630838394165,
                                        -0.9440330266952515,
                                        -0.9385407567024231,
                                        -0.4279041588306427,
                                        1.9245911836624146,
                                        -0.6166259050369263,
                                        -0.4827876687049866,
                                        -0.6270737648010254,
                                        1.9583004713058472,
                                        -1.4232165813446045,
                                        -1.3296666145324707
                                    ],
                                    [
                                        0.0187089741230011,
                                        -0.006915119476616383,
                                        0.012831040658056736,
                                        -0.0050893863663077354,
                                        -0.6317209005355835,
                                        0.6450430154800415,
                                        0.1666112244129181,
                                        0.023339780047535896,
                                        -0.6598775386810303,
                                        0.5095762610435486,
                                        -0.8687691688537598,
                                        -0.8291573524475098,
                                        -0.49519556760787964,
                                        0.6381590366363525,
                                        -0.46919238567352295,
                                        -0.315729022026062,
                                        -0.7012205123901367,
                                        0.49847614765167236,
                                        -1.3755639791488647,
                                        -1.2066013813018799
                                    ]
                                ];
                            }
                        },
                        {
                            arraySync() {
                                return [
                                    [0, 422.75665283203125, 437.88427734375, 477.02447509765625, 483.33624267578125],
                                    [0, 447.3840026855469, 267.2688293457031, 502.8170471191406, 313.0550842285156],
                                    [0, 277.0128173828125, 279.3642883300781, 321.76373291015625, 320.9208068847656],
                                    [0, 237.4621124267578, 555.1607666015625, 274.0981140136719, 590.35107421875],
                                    [0, 136.52267456054688, 443.6597900390625, 194.57174682617188, 499.91363525390625],
                                    [0, 194.68569946289062, 119.659912109375, 253.50399780273438, 172.31576538085938],
                                    [0, 412.67144775390625, 507.4123229980469, 468.86566162109375, 557.4110717773438],
                                    [0, 456.4179382324219, 247.44146728515625, 505.9593200683594, 291.29541015625]
                                ];
                            }
                        },
                        {
                            arraySync() {
                                return [
                                    [
                                        0.036149896681308746,
                                        0.9632817506790161,
                                        0.0001883091899799183,
                                        0.0001834518916439265,
                                        0.00019664257706608623
                                    ],
                                    [
                                        0.9726166725158691,
                                        0.027278536930680275,
                                        0.000035336943255970255,
                                        0.00002933281757577788,
                                        0.00004011698183603585
                                    ],
                                    [
                                        0.9996486902236938,
                                        0.0003340112161822617,
                                        0.000005781138952443143,
                                        0.0000015577093108731788,
                                        0.000009838158803177066
                                    ],
                                    [
                                        0.013475840911269188,
                                        0.9864395260810852,
                                        0.000030437686291406862,
                                        0.00001960373265319504,
                                        0.00003441192166064866
                                    ],
                                    [
                                        0.8819159269332886,
                                        0.11802727729082108,
                                        0.000013588559340860229,
                                        0.000003609474561017123,
                                        0.000039615948480786756
                                    ],
                                    [
                                        0.007817232050001621,
                                        0.9920933842658997,
                                        0.000026889996661338955,
                                        0.000028793616365874186,
                                        0.000033883181458804756
                                    ],
                                    [
                                        0.08987659215927124,
                                        0.9096361994743347,
                                        0.00017569192277733237,
                                        0.00010516642214497551,
                                        0.00020635798864532262
                                    ],
                                    [
                                        0.009311809204518795,
                                        0.9904364347457886,
                                        0.00009710797894513234,
                                        0.000053480860515264794,
                                        0.00010133199248230085
                                    ]
                                ];
                            }
                        }
                    ];
                }
            };
            return model;
        });
        spyOn(tfcore, 'cast').and.callThrough();
        objectDetection.predict().then((bboxList) => {
            expect(bboxList.length).not.toBeNull();
            expect(bboxList[0].x).not.toBeNull();
            expect(bboxList[0].w).not.toBeNull();
            expect(tfcore.cast).toHaveBeenCalled();
            objectDetection.dispose();
            expect(objectDetection.imageTensor).toBeNull();
            done();
        });
    });
});
