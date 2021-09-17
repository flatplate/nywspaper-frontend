import {Document} from './containers/DocView';

// const testData: Document = {
//   sentences: [
//     {
//       sent: 'During a hearing of the House Committee on Science, Space, and Technology on Wednesday, Rep Mo Brooks (R-Ala.) pressed Philip Duffy, president of Woods Hole Research Center, to identify reasons that sea levels might be rising.',
//       similar: [
//         {
//           sent: 'During a hearing of the House Committee on Science, Space, and Technology on Wednesday, Rep Mo Brooks (R-Ala.) pressed Philip Duffy, president of Woods Hole Research Center, to identify reasons that sea levels might be rising.',
//           sim: 1.000000238418579,
//           doc_id: 763
//         },
//         {
//           sent: 'Questioning scientist Phil Duffy of the Woods Hole Research Center, Brooks postulated that silt and mud washed by rivers into the ocean caused water levels to rise as it settled on the sea floor.',
//           sim: 0.7721422910690308,
//           doc_id: 764
//         },
//         {
//           sent: 'On Wednesday, at a hearing titled "using technology to address climate change," Brooks began by raising a broad question about rising ocean levels to the witness panel.',
//           sim: 0.727358877658844,
//           doc_id: 767
//         },
//         {
//           sent: 'North Alabama Congressman Mo Brooks is making headlines again for blaming sea level rise on rocks falling into the ocean and silt washing from major rivers.',
//           sim: 0.6353245973587036,
//           doc_id: 766
//         },
//         {sent: 'Please try again later.', sim: 0.15361735224723816, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'They are rising, without dispute, at an estimated rate of 3.3 millimeters a year.',
//       similar: [
//         {sent: 'They are rising, without dispute, at an estimated rate of 3.3 millimeters a year.', sim: 0.9999996423721313, doc_id: 763},
//         {sent: 'The oceans "are always rising," Brooks said, except during times of ice buildup that offset erosion.', sim: 0.4388903081417084, doc_id: 766},
//         {sent: 'All of that displaces water which forces it to rise, does it not?\u201d', sim: 0.42214030027389526, doc_id: 764},
//         {
//           sent: 'Philip Duffy, president of Woods Hole Research Center, said in response to the question that "the last 100-year increase in sea-level rise, as I mentioned earlier, has clearly been attributed to human activities, greenhouse gas emissions."',
//           sim: 0.3513570725917816,
//           doc_id: 767
//         },
//         {sent: 'Rating is available when the video has been rented.', sim: 0.04520447552204132, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'Much of that increase is attributed by scientists to melting surface ice.',
//       similar: [
//         {sent: 'Much of that increase is attributed by scientists to melting surface ice.', sim: 1.0000001192092896, doc_id: 763},
//         {sent: 'Brooks said the "total ice quantity, which is what affects sea levels, has been increasing.', sim: 0.6986913681030273, doc_id: 766},
//         {
//           sent: 'Brooks said: \u201cThere are plenty of studies that have come that show with respect to Antarctica that the total ice sheet, particularly that above land, is increasing, not decreasing.',
//           sim: 0.6891003847122192,
//           doc_id: 764
//         },
//         {
//           sent: 'Brooks then moved to ice levels and asserted that Antarctic ice is growing, to which Duffy responded that satellite records have documented "shrinkage of the Antarctic ice sheet and an acceleration of that shrinkage."',
//           sim: 0.6323038339614868,
//           doc_id: 767
//         },
//         {sent: 'Please try again later.', sim: 0.04267386719584465, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'The planet loses tens of billions of tons of ice each year.',
//       similar: [
//         {sent: 'The planet loses tens of billions of tons of ice each year.', sim: 1.0000007152557373, doc_id: 763},
//         {sent: '" In an ice age, sea levels drop significantly, he said.', sim: 0.6447340250015259, doc_id: 766},
//         {
//           sent: "The Sea Is Rising, but Not Because of Climate Change \n \n https://t.co/5IohGvDCHW \u2014 Sci,Space,&Tech Cmte (@HouseScience) May 17, 2018 \n \n According to NASA, Antarctica's ice sheets have lost mass since 2002.",
//           sim: 0.5428333282470703,
//           doc_id: 767
//         },
//         {sent: 'A recent study reported that the ice sheet had shrunk by 1,463km from 2010 to 2016.', sim: 0.5292654037475586, doc_id: 764},
//         {sent: 'Please try again later.', sim: 0.03549553453922272, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'Enough is lost from Antarctica alone to increase global sea levels by a millimeter every three years, but that figure isn\u2019t steady.',
//       similar: [
//         {
//           sent: 'Enough is lost from Antarctica alone to increase global sea levels by a millimeter every three years, but that figure isn\u2019t steady.',
//           sim: 1.0000001192092896,
//           doc_id: 763
//         },
//         {
//           sent: "The Sea Is Rising, but Not Because of Climate Change \n \n https://t.co/5IohGvDCHW \u2014 Sci,Space,&Tech Cmte (@HouseScience) May 17, 2018 \n \n According to NASA, Antarctica's ice sheets have lost mass since 2002.",
//           sim: 0.6844164729118347,
//           doc_id: 767
//         },
//         {sent: 'Brooks said the "total ice quantity, which is what affects sea levels, has been increasing.', sim: 0.603913426399231, doc_id: 766},
//         {
//           sent: 'Brooks said: \u201cThere are plenty of studies that have come that show with respect to Antarctica that the total ice sheet, particularly that above land, is increasing, not decreasing.',
//           sim: 0.5949850082397461,
//           doc_id: 764
//         },
//         {sent: 'Please try again later.', sim: 0.14291809499263763, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'Sea level rise is occurring at an increasing rate.',
//       similar: [
//         {sent: 'Sea level rise is occurring at an increasing rate.', sim: 0.9999997615814209, doc_id: 763},
//         {
//           sent: 'The agency\'s site also said , "Sea level rise is caused primarily by two factors related to global warming: the added water from melting ice sheets and glaciers and the expansion of seawater as it warms."',
//           sim: 0.7041263580322266,
//           doc_id: 767
//         },
//         {sent: 'Brooks said the "total ice quantity, which is what affects sea levels, has been increasing.', sim: 0.679826557636261, doc_id: 766},
//         {
//           sent: 'A member of Congress has suggested that the White Cliffs of Dover tumbling into the English Channel was causing rising sea levels.',
//           sim: 0.5976676940917969,
//           doc_id: 764
//         },
//         {sent: 'Please try again later.', sim: 0.12027817964553833, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'Brooks asked Duffy what else might be contributing to that rise.',
//       similar: [
//         {sent: 'Brooks asked Duffy what else might be contributing to that rise.', sim: 1.000000238418579, doc_id: 763},
//         {
//           sent: 'Questioning scientist Phil Duffy of the Woods Hole Research Center, Brooks postulated that silt and mud washed by rivers into the ocean caused water levels to rise as it settled on the sea floor.',
//           sim: 0.6621506810188293,
//           doc_id: 764
//         },
//         {sent: 'Brooks interjected and rephrased his question again, asking if there "are other factors.', sim: 0.607314944267273, doc_id: 767},
//         {
//           sent: 'Duffy cited NASA as one of his sources, and Brooks replied that, "I\'ve got a NASA base in my district and, apparently, they\'re telling you one thing and me a different thing."',
//           sim: 0.529266893863678,
//           doc_id: 766
//         },
//         {sent: 'Please try again later.', sim: 0.19613948464393616, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'Duffy pointed to ground subsidence, which is the sinking of the ground in places that can exacerbate the problem of rising sea levels.',
//       similar: [
//         {
//           sent: 'Duffy pointed to ground subsidence, which is the sinking of the ground in places that can exacerbate the problem of rising sea levels.',
//           sim: 1.0000007152557373,
//           doc_id: 763
//         },
//         {
//           sent: 'He added: "Every time you have that soil or rock, whatever it is, that is deposited into the seas, that forces the sea levels to rise because now you\'ve got less space in those oceans because the bottom is moving up."',
//           sim: 0.6232049465179443,
//           doc_id: 767
//         },
//         {
//           sent: 'A member of Congress has suggested that the White Cliffs of Dover tumbling into the English Channel was causing rising sea levels.',
//           sim: 0.6119721531867981,
//           doc_id: 764
//         },
//         {
//           sent: '"Keep in mind I\'m talking millions, tens of millions, hundreds of millions of years, erosion is the primary cause of thousands, if not tens of thousands, of cubic miles of sea displacement that in turn forces the sea levels to rise," he said.',
//           sim: 0.5914533138275146,
//           doc_id: 766
//         },
//         {sent: 'Please try again later.', sim: 0.17776091396808624, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'Cities like New Orleans are sinking quickly, even faster in many places than the seas are rising.',
//       similar: [
//         {sent: 'Cities like New Orleans are sinking quickly, even faster in many places than the seas are rising.', sim: 1.000000238418579, doc_id: 763},
//         {
//           sent: '"Keep in mind I\'m talking millions, tens of millions, hundreds of millions of years, erosion is the primary cause of thousands, if not tens of thousands, of cubic miles of sea displacement that in turn forces the sea levels to rise," he said.',
//           sim: 0.4642099440097809,
//           doc_id: 766
//         },
//         {sent: '\u201cNow you have got less space in those oceans because the bottom is moving up,\u201d he said.', sim: 0.4346831440925598, doc_id: 764},
//         {
//           sent: 'He added: "Every time you have that soil or rock, whatever it is, that is deposited into the seas, that forces the sea levels to rise because now you\'ve got less space in those oceans because the bottom is moving up."',
//           sim: 0.4188757538795471,
//           doc_id: 767
//         },
//         {sent: 'Please try again later.', sim: 0.1180957481265068, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'Brooks asked if any other factors were contributing to sea level rise.',
//       similar: [
//         {sent: 'Brooks asked if any other factors were contributing to sea level rise.', sim: 1.0000005960464478, doc_id: 763},
//         {sent: 'Instead, Brooks pointed to silt deposition as well as erosion as a cause of rising sea levels.', sim: 0.8008928298950195, doc_id: 764},
//         {
//           sent: 'Brooks was quoted saying, "Every time you have that soil or rock or whatever it is that is deposited into the seas, that forces the sea levels to rise, because now you have less space in those oceans, because the bottom is moving up."',
//           sim: 0.6985208988189697,
//           doc_id: 766
//         },
//         {
//           sent: 'On Wednesday, at a hearing titled "using technology to address climate change," Brooks began by raising a broad question about rising ocean levels to the witness panel.',
//           sim: 0.6975530385971069,
//           doc_id: 767
//         },
//         {sent: 'Please try again later.', sim: 0.11503429710865021, doc_id: 765}
//       ]
//     },
//     {
//       sent: '\u201cThose are all that I know of,\u201d Duffy replied.',
//       similar: [
//         {sent: '\u201cThose are all that I know of,\u201d Duffy replied.', sim: 1.0000005960464478, doc_id: 763},
//         {sent: '"None of that is new," Duffy said.', sim: 0.5819252133369446, doc_id: 767},
//         {sent: 'Duffy answered: \u201cI\u2019m pretty sure on human timescales, those are minuscule effects.\u201d', sim: 0.5325120091438293, doc_id: 764},
//         {
//           sent: 'Duffy cited NASA as one of his sources, and Brooks replied that, "I\'ve got a NASA base in my district and, apparently, they\'re telling you one thing and me a different thing."',
//           sim: 0.42261379957199097,
//           doc_id: 766
//         },
//         {sent: 'Please try again later.', sim: 0.18241728842258453, doc_id: 765}
//       ]
//     },
//     {
//       sent: '\u201cWhat about erosion!\u201d',
//       similar: [
//         {sent: '\u201cWhat about erosion!\u201d', sim: 1.0000003576278687, doc_id: 763},
//         {sent: '" \n \n "What about erosion?"', sim: 0.9135516285896301, doc_id: 767},
//         {
//           sent: '"You put it all together, erosion is the primary cause of sea level rise in the history of our planet," Brooks said, "and these people who say to the contrary may know something about climate but they don\'t know squat about geology."',
//           sim: 0.5683024525642395,
//           doc_id: 766
//         },
//         {sent: 'All of that displaces water which forces it to rise, does it not?\u201d', sim: 0.5445911884307861, doc_id: 764},
//         {sent: 'Please try again later.', sim: 0.1895781010389328, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'Brooks exclaimed.',
//       similar: [
//         {sent: 'Brooks exclaimed.', sim: 0.999999463558197, doc_id: 763},
//         {sent: 'Brooks offered during the exchange.', sim: 0.5453528165817261, doc_id: 767},
//         {sent: '"Money," Brooks said.', sim: 0.494115948677063, doc_id: 766},
//         {
//           sent: 'Brooks, a graduate of Duke University and University of Alabama School of Law, was first elected to Congress in 2010 from his North Alabama district.',
//           sim: 0.4180668294429779,
//           doc_id: 764
//         },
//         {sent: 'The interactive transcript could not be loaded.', sim: 0.14597821235656738, doc_id: 765}
//       ]
//     },
//     {
//       sent: '\u201cEvery single year that we\u2019re on Earth, you have huge tons of silt deposited by the Mississippi River, by the Amazon River, by the Nile, by every major river system \u2014 and for that matter, creek, all the way down to the smallest systems.',
//       similar: [
//         {
//           sent: '\u201cEvery single year that we\u2019re on Earth, you have huge tons of silt deposited by the Mississippi River, by the Amazon River, by the Nile, by every major river system \u2014 and for that matter, creek, all the way down to the smallest systems.',
//           sim: 1.0,
//           doc_id: 763
//         },
//         {
//           sent: 'Look at the "huge alluvial planes that exist around the great rivers like the Mississippi, the Amazon, the Mekong, the Danube, the Yangtze and you\'ll see these huge alluvial planes made up entirely of erosion," he said.',
//           sim: 0.5436567664146423,
//           doc_id: 766
//         },
//         {
//           sent: 'He added: "Every time you have that soil or rock, whatever it is, that is deposited into the seas, that forces the sea levels to rise because now you\'ve got less space in those oceans because the bottom is moving up."',
//           sim: 0.5266506671905518,
//           doc_id: 767
//         },
//         {
//           sent: 'Questioning scientist Phil Duffy of the Woods Hole Research Center, Brooks postulated that silt and mud washed by rivers into the ocean caused water levels to rise as it settled on the sea floor.',
//           sim: 0.4931906461715698,
//           doc_id: 764
//         },
//         {sent: 'Please try again later.', sim: 0.11894907057285309, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'And every time you have that soil or rock whatever it is that is deposited into the seas, that forces the sea levels to rise.',
//       similar: [
//         {
//           sent: 'And every time you have that soil or rock whatever it is that is deposited into the seas, that forces the sea levels to rise.',
//           sim: 1.0000004768371582,
//           doc_id: 763
//         },
//         {
//           sent: 'He added: "Every time you have that soil or rock, whatever it is, that is deposited into the seas, that forces the sea levels to rise because now you\'ve got less space in those oceans because the bottom is moving up."',
//           sim: 0.9139407873153687,
//           doc_id: 767
//         },
//         {
//           sent: 'Brooks was quoted saying, "Every time you have that soil or rock or whatever it is that is deposited into the seas, that forces the sea levels to rise, because now you have less space in those oceans, because the bottom is moving up."',
//           sim: 0.8598692417144775,
//           doc_id: 766
//         },
//         {sent: 'All of that displaces water which forces it to rise, does it not?\u201d', sim: 0.63074791431427, doc_id: 764},
//         {sent: 'Please try again later.', sim: 0.2090671956539154, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'Because now you\u2019ve got less space in those oceans because the bottom is moving up.\u201d',
//       similar: [
//         {sent: 'Because now you\u2019ve got less space in those oceans because the bottom is moving up.\u201d', sim: 0.9999997615814209, doc_id: 763},
//         {sent: '\u201cNow you have got less space in those oceans because the bottom is moving up,\u201d he said.', sim: 0.9654277563095093, doc_id: 764},
//         {
//           sent: 'He added: "Every time you have that soil or rock, whatever it is, that is deposited into the seas, that forces the sea levels to rise because now you\'ve got less space in those oceans because the bottom is moving up."',
//           sim: 0.7539166808128357,
//           doc_id: 767
//         },
//         {
//           sent: 'Brooks was quoted saying, "Every time you have that soil or rock or whatever it is that is deposited into the seas, that forces the sea levels to rise, because now you have less space in those oceans, because the bottom is moving up."',
//           sim: 0.6828042268753052,
//           doc_id: 766
//         },
//         {sent: 'Please try again later.', sim: 0.30569973587989807, doc_id: 765}
//       ]
//     },
//     {
//       sent: '\u201cI\u2019m pretty sure that\u2019s \u2026\u201d Duffy tried to interject.',
//       similar: [
//         {sent: '\u201cI\u2019m pretty sure that\u2019s \u2026\u201d Duffy tried to interject.', sim: 0.9999997615814209, doc_id: 763},
//         {sent: '"None of that is new," Duffy said.', sim: 0.6225533485412598, doc_id: 767},
//         {sent: 'Duffy answered: \u201cI\u2019m pretty sure on human timescales, those are minuscule effects.\u201d', sim: 0.5885398387908936, doc_id: 764},
//         {
//           sent: 'Duffy cited NASA as one of his sources, and Brooks replied that, "I\'ve got a NASA base in my district and, apparently, they\'re telling you one thing and me a different thing."',
//           sim: 0.5331369638442993,
//           doc_id: 766
//         },
//         {sent: 'Please try again later.', sim: 0.2823728322982788, doc_id: 765}
//       ]
//     },
//     {
//       sent: '\u201cWhat about the white cliffs of Dover?\u201d',
//       similar: [
//         {sent: '\u201cWhat about the white cliffs of Dover?\u201d', sim: 0.9999999403953552, doc_id: 763},
//         {
//           sent: 'He went on: \u201cWhat about the White Cliffs of Dover \u2026 [and] California, where you have the waves crashing against the shorelines, and time and time again you have the cliffs crashing into the sea?',
//           sim: 0.6866405606269836,
//           doc_id: 764
//         },
//         {
//           sent: "He referred to erosion on the California coastline and England's White Cliffs of Dover and silt from the Mississippi and Nile rivers.",
//           sim: 0.5410376787185669,
//           doc_id: 766
//         },
//         {sent: '" \n \n "What about erosion?"', sim: 0.48479723930358887, doc_id: 767},
//         {sent: 'Please try again later.', sim: 0.2166389375925064, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'Brooks continued.',
//       similar: [
//         {sent: 'Brooks continued.', sim: 1.0000003576278687, doc_id: 763},
//         {sent: 'Brooks interjected and rephrased his question again, asking if there "are other factors.', sim: 0.5623776316642761, doc_id: 767},
//         {sent: '"Money," Brooks said.', sim: 0.561005175113678, doc_id: 766},
//         {
//           sent: 'Republican Mo Brooks of Alabama pushed back at the notion that rising sea levels were the result of global warming in a hearing of the House Science, Space and Technology on Wednesday.',
//           sim: 0.5429685115814209,
//           doc_id: 764
//         },
//         {sent: 'Please try again later.', sim: 0.15664230287075043, doc_id: 765}
//       ]
//     },
//     {
//       sent: '\u201cCalifornia, where you have the waves crashing against the shorelines and time and time again you have the cliffs crash into the sea.',
//       similar: [
//         {
//           sent: '\u201cCalifornia, where you have the waves crashing against the shorelines and time and time again you have the cliffs crash into the sea.',
//           sim: 0.9999997615814209,
//           doc_id: 763
//         },
//         {
//           sent: 'He went on: \u201cWhat about the White Cliffs of Dover \u2026 [and] California, where you have the waves crashing against the shorelines, and time and time again you have the cliffs crashing into the sea?',
//           sim: 0.7704931497573853,
//           doc_id: 764
//         },
//         {
//           sent: "He referred to erosion on the California coastline and England's White Cliffs of Dover and silt from the Mississippi and Nile rivers.",
//           sim: 0.5244312286376953,
//           doc_id: 766
//         },
//         {
//           sent: 'He added: "Every time you have that soil or rock, whatever it is, that is deposited into the seas, that forces the sea levels to rise because now you\'ve got less space in those oceans because the bottom is moving up."',
//           sim: 0.5216155052185059,
//           doc_id: 767
//         },
//         {sent: 'Please try again later.', sim: 0.21283820271492004, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'All of that displaces the water which forces it to rise, does it not?\u201d',
//       similar: [
//         {sent: 'All of that displaces the water which forces it to rise, does it not?\u201d', sim: 0.9999997615814209, doc_id: 763},
//         {sent: 'All of that displaces water which forces it to rise, does it not?\u201d', sim: 0.9908432960510254, doc_id: 764},
//         {
//           sent: 'Brooks was quoted saying, "Every time you have that soil or rock or whatever it is that is deposited into the seas, that forces the sea levels to rise, because now you have less space in those oceans, because the bottom is moving up."',
//           sim: 0.6705992817878723,
//           doc_id: 766
//         },
//         {
//           sent: 'He added: "Every time you have that soil or rock, whatever it is, that is deposited into the seas, that forces the sea levels to rise because now you\'ve got less space in those oceans because the bottom is moving up."',
//           sim: 0.655472457408905,
//           doc_id: 767
//         },
//         {sent: 'Please try again later.', sim: 0.19802680611610413, doc_id: 765}
//       ]
//     },
//     {
//       sent: '\u201cI\u2019m pretty sure that on human time scales,\u201d Duffy replied, \u201cthose are minuscule effects.\u201d',
//       similar: [
//         {sent: '\u201cI\u2019m pretty sure that on human time scales,\u201d Duffy replied, \u201cthose are minuscule effects.\u201d', sim: 1.0, doc_id: 763},
//         {sent: '"I\'m pretty sure that on human time scales those are minuscule effects," Duffy said.', sim: 0.9820006489753723, doc_id: 767},
//         {sent: 'Duffy answered: \u201cI\u2019m pretty sure on human timescales, those are minuscule effects.\u201d', sim: 0.9793775677680969, doc_id: 764},
//         {sent: 'Duffy said satellite records "clearly" show shrinkage and a speedup of that shrinkage.', sim: 0.4393393397331238, doc_id: 766},
//         {sent: 'Please try again later.', sim: 0.270341694355011, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'Duffy is correct.',
//       similar: [
//         {sent: 'Duffy is correct.', sim: 1.0000001192092896, doc_id: 763},
//         {sent: '"None of that is new," Duffy said.', sim: 0.5236808061599731, doc_id: 767},
//         {sent: 'Duffy answered: \u201cI\u2019m pretty sure on human timescales, those are minuscule effects.\u201d', sim: 0.49652528762817383, doc_id: 764},
//         {
//           sent: 'Duffy cited NASA as one of his sources, and Brooks replied that, "I\'ve got a NASA base in my district and, apparently, they\'re telling you one thing and me a different thing."',
//           sim: 0.438887357711792,
//           doc_id: 766
//         },
//         {sent: 'Please try again later.', sim: 0.21238267421722412, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'Brooks has a vision in his head like the classic experiment by Archimedes, in which the scientist sank down into his bath and noticed the water overflow \u2014 providing a way to determine the volume of his body.',
//       similar: [
//         {
//           sent: 'Brooks has a vision in his head like the classic experiment by Archimedes, in which the scientist sank down into his bath and noticed the water overflow \u2014 providing a way to determine the volume of his body.',
//           sim: 1.0000001192092896,
//           doc_id: 763
//         },
//         {
//           sent: "Instead, Alabama Republican Rep. Mo Brooks offered an additional culprit: soil or rock deposits into the world's waters.",
//           sim: 0.4929196238517761,
//           doc_id: 767
//         },
//         {
//           sent: 'Questioning scientist Phil Duffy of the Woods Hole Research Center, Brooks postulated that silt and mud washed by rivers into the ocean caused water levels to rise as it settled on the sea floor.',
//           sim: 0.48238861560821533,
//           doc_id: 764
//         },
//         {
//           sent: 'Brooks was quoted saying, "Every time you have that soil or rock or whatever it is that is deposited into the seas, that forces the sea levels to rise, because now you have less space in those oceans, because the bottom is moving up."',
//           sim: 0.41909685730934143,
//           doc_id: 766
//         },
//         {sent: 'Please try again later.', sim: 0.10222847759723663, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'But the amount of water displaced by even a giant boulder falling into the ocean is not like a body going into a bathtub.',
//       similar: [
//         {
//           sent: 'But the amount of water displaced by even a giant boulder falling into the ocean is not like a body going into a bathtub.',
//           sim: 0.999999463558197,
//           doc_id: 763
//         },
//         {
//           sent: '"Here\'s how big a rock you\'d have to drop into the ocean to see the rise in sea level happening now," chimed in the Washington Post.',
//           sim: 0.519146203994751,
//           doc_id: 766
//         },
//         {sent: 'All of that displaces water which forces it to rise, does it not?\u201d', sim: 0.5162374377250671, doc_id: 764},
//         {
//           sent: 'He added: "Every time you have that soil or rock, whatever it is, that is deposited into the seas, that forces the sea levels to rise because now you\'ve got less space in those oceans because the bottom is moving up."',
//           sim: 0.4608580768108368,
//           doc_id: 767
//         },
//         {sent: 'Please try again later.', sim: 0.14811521768569946, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'It is, as Duffy said, minuscule.',
//       similar: [
//         {sent: 'It is, as Duffy said, minuscule.', sim: 0.9999993443489075, doc_id: 763},
//         {sent: 'Duffy answered: \u201cI\u2019m pretty sure on human timescales, those are minuscule effects.\u201d', sim: 0.8168175220489502, doc_id: 764},
//         {sent: '"I\'m pretty sure that on human time scales those are minuscule effects," Duffy said.', sim: 0.7934858798980713, doc_id: 767},
//         {sent: 'It is very rarely constant."', sim: 0.4365101456642151, doc_id: 766},
//         {sent: 'Please try again later.', sim: 0.2857587933540344, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'Certainly 3.3 millimeters doesn\u2019t sound like a lot of water to displace, and it does seem, to Brooks\u2019s point, that it\u2019s an amount \u2014 about 0.1 inch \u2014 that would be easy to displace with a cliff collapse near San Diego.',
//       similar: [
//         {
//           sent: 'Certainly 3.3 millimeters doesn\u2019t sound like a lot of water to displace, and it does seem, to Brooks\u2019s point, that it\u2019s an amount \u2014 about 0.1 inch \u2014 that would be easy to displace with a cliff collapse near San Diego.',
//           sim: 1.0000004768371582,
//           doc_id: 763
//         },
//         {sent: 'All of that displaces water which forces it to rise, does it not?\u201d', sim: 0.5107752680778503, doc_id: 764},
//         {
//           sent: '"Here\'s how big a rock you\'d have to drop into the ocean to see the rise in sea level happening now," chimed in the Washington Post.',
//           sim: 0.4719758629798889,
//           doc_id: 766
//         },
//         {sent: '" \n \n "What about erosion?"', sim: 0.4436696171760559, doc_id: 767},
//         {sent: 'Please try again later.', sim: 0.12163257598876953, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'The equivalent rise relative to surface area in an Olympic-sized swimming pool would be 0.0000000000114 millimeters.',
//       similar: [
//         {
//           sent: 'The equivalent rise relative to surface area in an Olympic-sized swimming pool would be 0.0000000000114 millimeters.',
//           sim: 1.0000007152557373,
//           doc_id: 763
//         },
//         {sent: "He's talking about surface area.", sim: 0.4366636574268341, doc_id: 766},
//         {sent: 'All of that displaces water which forces it to rise, does it not?\u201d', sim: 0.37636804580688477, doc_id: 764},
//         {
//           sent: 'He added: "Every time you have that soil or rock, whatever it is, that is deposited into the seas, that forces the sea levels to rise because now you\'ve got less space in those oceans because the bottom is moving up."',
//           sim: 0.31569719314575195,
//           doc_id: 767
//         },
//         {sent: 'Please try again later.', sim: 0.07703015208244324, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'That\u2019s not possible, though, since a water molecule isn\u2019t that small.',
//       similar: [
//         {sent: 'That\u2019s not possible, though, since a water molecule isn\u2019t that small.', sim: 1.0000003576278687, doc_id: 763},
//         {sent: '"I\'m pretty sure that on human time scales those are minuscule effects," Duffy said.', sim: 0.4188571274280548, doc_id: 767},
//         {sent: 'It is very rarely constant."', sim: 0.3950519561767578, doc_id: 766},
//         {sent: 'All of that displaces water which forces it to rise, does it not?\u201d', sim: 0.38513168692588806, doc_id: 764},
//         {sent: 'Please try again later.', sim: 0.19329360127449036, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'But when you apply 3.3 millimeters of rise to the entire ocean?',
//       similar: [
//         {sent: 'But when you apply 3.3 millimeters of rise to the entire ocean?', sim: 0.999999463558197, doc_id: 763},
//         {
//           sent: 'He added: "Every time you have that soil or rock, whatever it is, that is deposited into the seas, that forces the sea levels to rise because now you\'ve got less space in those oceans because the bottom is moving up."',
//           sim: 0.6458568572998047,
//           doc_id: 767
//         },
//         {sent: 'All of that displaces water which forces it to rise, does it not?\u201d', sim: 0.6390639543533325, doc_id: 764},
//         {
//           sent: '"Here\'s how big a rock you\'d have to drop into the ocean to see the rise in sea level happening now," chimed in the Washington Post.',
//           sim: 0.6112070083618164,
//           doc_id: 766
//         },
//         {sent: 'Please try again later.', sim: 0.18111050128936768, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'We\u2019re talking about a lot of water that\u2019s displaced \u2014 3.3 millimeters across about 362 million square kilometers of surface area.',
//       similar: [
//         {
//           sent: 'We\u2019re talking about a lot of water that\u2019s displaced \u2014 3.3 millimeters across about 362 million square kilometers of surface area.',
//           sim: 1.0000007152557373,
//           doc_id: 763
//         },
//         {
//           sent: '"Keep in mind I\'m talking millions, tens of millions, hundreds of millions of years, erosion is the primary cause of thousands, if not tens of thousands, of cubic miles of sea displacement that in turn forces the sea levels to rise," he said.',
//           sim: 0.5375344157218933,
//           doc_id: 766
//         },
//         {sent: 'All of that displaces water which forces it to rise, does it not?\u201d', sim: 0.4929364025592804, doc_id: 764},
//         {
//           sent: 'He added: "Every time you have that soil or rock, whatever it is, that is deposited into the seas, that forces the sea levels to rise because now you\'ve got less space in those oceans because the bottom is moving up."',
//           sim: 0.4410555064678192,
//           doc_id: 767
//         },
//         {sent: 'Please try again later.', sim: 0.09612082690000534, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'The total volume displaced, then, would be 1.19 trillion cubic meters of water.',
//       similar: [
//         {sent: 'The total volume displaced, then, would be 1.19 trillion cubic meters of water.', sim: 1.000000238418579, doc_id: 763},
//         {
//           sent: '"Keep in mind I\'m talking millions, tens of millions, hundreds of millions of years, erosion is the primary cause of thousands, if not tens of thousands, of cubic miles of sea displacement that in turn forces the sea levels to rise," he said.',
//           sim: 0.5221340656280518,
//           doc_id: 766
//         },
//         {sent: 'All of that displaces water which forces it to rise, does it not?\u201d', sim: 0.476784884929657, doc_id: 764},
//         {
//           sent: 'He added: "Every time you have that soil or rock, whatever it is, that is deposited into the seas, that forces the sea levels to rise because now you\'ve got less space in those oceans because the bottom is moving up."',
//           sim: 0.4064093232154846,
//           doc_id: 767
//         },
//         {sent: 'Please try again later.', sim: 0.07504227012395859, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'We know from Archimedes\u2019 work that the amount of earth required to displace that much water is the same volume: 1.19 trillion cubic meters.',
//       similar: [
//         {
//           sent: 'We know from Archimedes\u2019 work that the amount of earth required to displace that much water is the same volume: 1.19 trillion cubic meters.',
//           sim: 1.000000238418579,
//           doc_id: 763
//         },
//         {sent: 'All of that displaces water which forces it to rise, does it not?\u201d', sim: 0.49925026297569275, doc_id: 764},
//         {
//           sent: '"Keep in mind I\'m talking millions, tens of millions, hundreds of millions of years, erosion is the primary cause of thousands, if not tens of thousands, of cubic miles of sea displacement that in turn forces the sea levels to rise," he said.',
//           sim: 0.4793325960636139,
//           doc_id: 766
//         },
//         {
//           sent: 'He added: "Every time you have that soil or rock, whatever it is, that is deposited into the seas, that forces the sea levels to rise because now you\'ve got less space in those oceans because the bottom is moving up."',
//           sim: 0.40725159645080566,
//           doc_id: 767
//         },
//         {sent: 'Please try again later.', sim: 0.06220592185854912, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'Here\u2019s a corny video by a science teacher showing how it works.',
//       similar: [
//         {sent: 'Here\u2019s a corny video by a science teacher showing how it works.', sim: 1.0000004768371582, doc_id: 763},
//         {
//           sent: 'However, Brooks insisted: \u201cWell, I\u2019ve got a Nasa base in my district, and apparently, they\u2019re telling you one thing and me a different thing.\u201d',
//           sim: 0.3589620590209961,
//           doc_id: 764
//         },
//         {
//           sent: '"What I\'m trying to establish is that a lot of these climatologists have no idea what they\'re really talking about," Brooks said, "and it\'s because we have not had a long enough period time with exact scientific measurement to know what the climate\'s going to be like 50 years from now or 100 years from now."',
//           sim: 0.3568209111690521,
//           doc_id: 766
//         },
//         {
//           sent: 'A member of the House Committee on Science, Space and Technology evinced skepticism about climate change during an exchange with a witness about rising sea levels.',
//           sim: 0.34736403822898865,
//           doc_id: 767
//         },
//         {sent: 'Rating is available when the video has been rented.', sim: 0.2094079852104187, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'So to make the oceans rise 3.3 millimeters, we would need to displace that 1.2 trillion cubic meters of water upward by dropping in 1.2 trillion cubic meters of dirt or stone or whatever.',
//       similar: [
//         {
//           sent: 'So to make the oceans rise 3.3 millimeters, we would need to displace that 1.2 trillion cubic meters of water upward by dropping in 1.2 trillion cubic meters of dirt or stone or whatever.',
//           sim: 0.9999999403953552,
//           doc_id: 763
//         },
//         {
//           sent: 'He added: "Every time you have that soil or rock, whatever it is, that is deposited into the seas, that forces the sea levels to rise because now you\'ve got less space in those oceans because the bottom is moving up."',
//           sim: 0.617563009262085,
//           doc_id: 767
//         },
//         {
//           sent: '"Keep in mind I\'m talking millions, tens of millions, hundreds of millions of years, erosion is the primary cause of thousands, if not tens of thousands, of cubic miles of sea displacement that in turn forces the sea levels to rise," he said.',
//           sim: 0.6169133186340332,
//           doc_id: 766
//         },
//         {sent: 'All of that displaces water which forces it to rise, does it not?\u201d', sim: 0.6009173393249512, doc_id: 764},
//         {sent: 'Please try again later.', sim: 0.10922633111476898, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'How much is that?',
//       similar: [
//         {sent: 'How much is that?', sim: 1.0000003576278687, doc_id: 763},
//         {sent: '"Money," Brooks said.', sim: 0.3326443135738373, doc_id: 766},
//         {sent: '"And apparently, they\'re telling you one thing and me a different thing."', sim: 0.20899879932403564, doc_id: 767},
//         {sent: '\u201cNow you have got less space in those oceans because the bottom is moving up,\u201d he said.', sim: 0.1893177181482315, doc_id: 764},
//         {sent: 'Please try again later.', sim: 0.18551425635814667, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'It\u2019s a sphere of earth a bit over 8 miles in diameter.',
//       similar: [
//         {sent: 'It\u2019s a sphere of earth a bit over 8 miles in diameter.', sim: 1.000000238418579, doc_id: 763},
//         {sent: "He's talking about surface area.", sim: 0.38836735486984253, doc_id: 766},
//         {sent: '"I\'ve got a NASA base in my district," Brooks said.', sim: 0.2789067029953003, doc_id: 767},
//         {sent: 'A recent study reported that the ice sheet had shrunk by 1,463km from 2010 to 2016.', sim: 0.2566124200820923, doc_id: 764},
//         {sent: 'This feature is not available right now.', sim: 0.08329989016056061, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'If we were to balance it at the top of the Capitol building, it would look like this.',
//       similar: [
//         {sent: 'If we were to balance it at the top of the Capitol building, it would look like this.', sim: 1.0, doc_id: 763},
//         {
//           sent: '"Here\'s how big a rock you\'d have to drop into the ocean to see the rise in sea level happening now," chimed in the Washington Post.',
//           sim: 0.3758898079395294,
//           doc_id: 766
//         },
//         {sent: 'All of that displaces water which forces it to rise, does it not?\u201d', sim: 0.307513564825058, doc_id: 764},
//         {sent: 'Washington (CNN)', sim: 0.2904258370399475, doc_id: 767},
//         {sent: 'Please try again later.', sim: 0.24536335468292236, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'If the sphere were stone, it would weigh about 6.6 quadrillion pounds.',
//       similar: [
//         {sent: 'If the sphere were stone, it would weigh about 6.6 quadrillion pounds.', sim: 1.0, doc_id: 763},
//         {sent: "He's talking about surface area.", sim: 0.3500773310661316, doc_id: 766},
//         {sent: 'All of that displaces water which forces it to rise, does it not?\u201d', sim: 0.29116785526275635, doc_id: 764},
//         {
//           sent: 'He added: "Every time you have that soil or rock, whatever it is, that is deposited into the seas, that forces the sea levels to rise because now you\'ve got less space in those oceans because the bottom is moving up."',
//           sim: 0.2766738533973694,
//           doc_id: 767
//         },
//         {sent: 'Please try again later.', sim: 0.03673439100384712, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'Just drop that in the ocean and \u2014 bloop! \u2014 3.3 millimeters of sea-level increase.',
//       similar: [
//         {sent: 'Just drop that in the ocean and \u2014 bloop! \u2014 3.3 millimeters of sea-level increase.', sim: 0.9999995231628418, doc_id: 763},
//         {
//           sent: '"Here\'s how big a rock you\'d have to drop into the ocean to see the rise in sea level happening now," chimed in the Washington Post.',
//           sim: 0.667146623134613,
//           doc_id: 766
//         },
//         {
//           sent: 'He added: "Every time you have that soil or rock, whatever it is, that is deposited into the seas, that forces the sea levels to rise because now you\'ve got less space in those oceans because the bottom is moving up."',
//           sim: 0.6487361192703247,
//           doc_id: 767
//         },
//         {sent: '\u201cNow you have got less space in those oceans because the bottom is moving up,\u201d he said.', sim: 0.5861932039260864, doc_id: 764},
//         {sent: 'Please try again later.', sim: 0.18283970654010773, doc_id: 765}
//       ]
//     },
//     {
//       sent: '(We\u2019re ignoring here that dropping it in some parts of the ocean would result in a mountain in that location.',
//       similar: [
//         {
//           sent: '(We\u2019re ignoring here that dropping it in some parts of the ocean would result in a mountain in that location.',
//           sim: 0.9999994039535522,
//           doc_id: 763
//         },
//         {
//           sent: '"Here\'s how big a rock you\'d have to drop into the ocean to see the rise in sea level happening now," chimed in the Washington Post.',
//           sim: 0.5759884119033813,
//           doc_id: 766
//         },
//         {sent: 'All of that displaces water which forces it to rise, does it not?\u201d', sim: 0.5647780895233154, doc_id: 764},
//         {
//           sent: 'He added: "Every time you have that soil or rock, whatever it is, that is deposited into the seas, that forces the sea levels to rise because now you\'ve got less space in those oceans because the bottom is moving up."',
//           sim: 0.5532022714614868,
//           doc_id: 767
//         },
//         {sent: 'Please try again later.', sim: 0.15637695789337158, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'For the sake of explaining things, we\u2019re pretending that the oceans are just one big uniform pool of water and that the sea level rise is similarly consistent.',
//       similar: [
//         {
//           sent: 'For the sake of explaining things, we\u2019re pretending that the oceans are just one big uniform pool of water and that the sea level rise is similarly consistent.',
//           sim: 0.9999995231628418,
//           doc_id: 763
//         },
//         {sent: 'The oceans "are always rising," Brooks said, except during times of ice buildup that offset erosion.', sim: 0.6005081534385681, doc_id: 766},
//         {sent: 'All of that displaces water which forces it to rise, does it not?\u201d', sim: 0.5745384693145752, doc_id: 764},
//         {
//           sent: 'He added: "Every time you have that soil or rock, whatever it is, that is deposited into the seas, that forces the sea levels to rise because now you\'ve got less space in those oceans because the bottom is moving up."',
//           sim: 0.5489948987960815,
//           doc_id: 767
//         },
//         {sent: 'Please try again later.', sim: 0.10645337402820587, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'This isn\u2019t how it works, of course.)',
//       similar: [
//         {sent: 'This isn\u2019t how it works, of course.)', sim: 1.0000007152557373, doc_id: 763},
//         {sent: '"And apparently, they\'re telling you one thing and me a different thing."', sim: 0.451454758644104, doc_id: 767},
//         {sent: 'It is very rarely constant."', sim: 0.4465082883834839, doc_id: 766},
//         {
//           sent: 'However, Brooks insisted: \u201cWell, I\u2019ve got a Nasa base in my district, and apparently, they\u2019re telling you one thing and me a different thing.\u201d',
//           sim: 0.33149415254592896,
//           doc_id: 764
//         },
//         {sent: 'Please try again later.', sim: 0.2784339189529419, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'Put another way, it\u2019s a volume of earth equivalent to taking the top five inches of every one of the United States\u2019 9.1 million square miles of land area and using it to coat the bottom of the world\u2019s oceans.',
//       similar: [
//         {
//           sent: 'Put another way, it\u2019s a volume of earth equivalent to taking the top five inches of every one of the United States\u2019 9.1 million square miles of land area and using it to coat the bottom of the world\u2019s oceans.',
//           sim: 1.0,
//           doc_id: 763
//         },
//         {sent: "He's talking about surface area.", sim: 0.5188794136047363, doc_id: 766},
//         {
//           sent: 'He added: "Every time you have that soil or rock, whatever it is, that is deposited into the seas, that forces the sea levels to rise because now you\'ve got less space in those oceans because the bottom is moving up."',
//           sim: 0.4985557794570923,
//           doc_id: 767
//         },
//         {sent: '\u201cNow you have got less space in those oceans because the bottom is moving up,\u201d he said.', sim: 0.4471149742603302, doc_id: 764},
//         {sent: 'Please try again later.', sim: 0.12894609570503235, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'That would push sea levels up by 3.3 millimeters.',
//       similar: [
//         {sent: 'That would push sea levels up by 3.3 millimeters.', sim: 0.9999999403953552, doc_id: 763},
//         {
//           sent: 'He added: "Every time you have that soil or rock, whatever it is, that is deposited into the seas, that forces the sea levels to rise because now you\'ve got less space in those oceans because the bottom is moving up."',
//           sim: 0.5734087228775024,
//           doc_id: 767
//         },
//         {
//           sent: '"Here\'s how big a rock you\'d have to drop into the ocean to see the rise in sea level happening now," chimed in the Washington Post.',
//           sim: 0.5500333309173584,
//           doc_id: 766
//         },
//         {
//           sent: 'A member of Congress has suggested that the White Cliffs of Dover tumbling into the English Channel was causing rising sea levels.',
//           sim: 0.4996853470802307,
//           doc_id: 764
//         },
//         {sent: 'Please try again later.', sim: 0.1014389917254448, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'But, remember: That sea level rise happens annually.',
//       similar: [
//         {sent: 'But, remember: That sea level rise happens annually.', sim: 1.000000238418579, doc_id: 763},
//         {sent: 'The oceans "are always rising," Brooks said, except during times of ice buildup that offset erosion.', sim: 0.7104870080947876, doc_id: 766},
//         {
//           sent: 'He added: "Every time you have that soil or rock, whatever it is, that is deposited into the seas, that forces the sea levels to rise because now you\'ve got less space in those oceans because the bottom is moving up."',
//           sim: 0.6505616903305054,
//           doc_id: 767
//         },
//         {sent: 'All of that displaces water which forces it to rise, does it not?\u201d', sim: 0.5927573442459106, doc_id: 764},
//         {sent: 'Please try again later.', sim: 0.1803385615348816, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'So every year, we\u2019d need to take the top five inches of the United States, roll it in a ball and drop it in the ocean to get the sort of sea level rise we\u2019re currently seeing.',
//       similar: [
//         {
//           sent: 'So every year, we\u2019d need to take the top five inches of the United States, roll it in a ball and drop it in the ocean to get the sort of sea level rise we\u2019re currently seeing.',
//           sim: 0.9999999403953552,
//           doc_id: 763
//         },
//         {
//           sent: '"Here\'s how big a rock you\'d have to drop into the ocean to see the rise in sea level happening now," chimed in the Washington Post.',
//           sim: 0.7134928703308105,
//           doc_id: 766
//         },
//         {
//           sent: 'He added: "Every time you have that soil or rock, whatever it is, that is deposited into the seas, that forces the sea levels to rise because now you\'ve got less space in those oceans because the bottom is moving up."',
//           sim: 0.6686522960662842,
//           doc_id: 767
//         },
//         {sent: '\u201cNow you have got less space in those oceans because the bottom is moving up,\u201d he said.', sim: 0.5794605612754822, doc_id: 764},
//         {sent: 'Please try again later.', sim: 0.1988079845905304, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'Don\u2019t worry, though; assuming that the depth of Earth\u2019s crust is about 40 kilometers in the United States, it would take 309,000 years for us to get to the mantle.',
//       similar: [
//         {
//           sent: 'Don\u2019t worry, though; assuming that the depth of Earth\u2019s crust is about 40 kilometers in the United States, it would take 309,000 years for us to get to the mantle.',
//           sim: 0.9999997615814209,
//           doc_id: 763
//         },
//         {
//           sent: '"Here\'s how big a rock you\'d have to drop into the ocean to see the rise in sea level happening now," chimed in the Washington Post.',
//           sim: 0.4547592103481293,
//           doc_id: 766
//         },
//         {
//           sent: 'He added: "Every time you have that soil or rock, whatever it is, that is deposited into the seas, that forces the sea levels to rise because now you\'ve got less space in those oceans because the bottom is moving up."',
//           sim: 0.3554975092411041,
//           doc_id: 767
//         },
//         {sent: '\u201cNow you have got less space in those oceans because the bottom is moving up,\u201d he said.', sim: 0.33763375878334045, doc_id: 764},
//         {sent: 'Please try again later.', sim: 0.16438540816307068, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'Except, of course, that sea level rise is occurring at an increasing rate.',
//       similar: [
//         {sent: 'Except, of course, that sea level rise is occurring at an increasing rate.', sim: 0.9999995231628418, doc_id: 763},
//         {
//           sent: '"Keep in mind I\'m talking millions, tens of millions, hundreds of millions of years, erosion is the primary cause of thousands, if not tens of thousands, of cubic miles of sea displacement that in turn forces the sea levels to rise," he said.',
//           sim: 0.7141134738922119,
//           doc_id: 766
//         },
//         {
//           sent: 'He added: "Every time you have that soil or rock, whatever it is, that is deposited into the seas, that forces the sea levels to rise because now you\'ve got less space in those oceans because the bottom is moving up."',
//           sim: 0.7082948684692383,
//           doc_id: 767
//         },
//         {sent: 'All of that displaces water which forces it to rise, does it not?\u201d', sim: 0.6366753578186035, doc_id: 764},
//         {sent: 'Please try again later.', sim: 0.17150253057479858, doc_id: 765}
//       ]
//     },
//     {
//       sent: 'If someone could check on the white cliffs of Dover for us, we\u2019d appreciate it.',
//       similar: [
//         {sent: 'If someone could check on the white cliffs of Dover for us, we\u2019d appreciate it.', sim: 1.0000003576278687, doc_id: 763},
//         {
//           sent: 'He went on: \u201cWhat about the White Cliffs of Dover \u2026 [and] California, where you have the waves crashing against the shorelines, and time and time again you have the cliffs crashing into the sea?',
//           sim: 0.5180652141571045,
//           doc_id: 764
//         },
//         {
//           sent: "He referred to erosion on the California coastline and England's White Cliffs of Dover and silt from the Mississippi and Nile rivers.",
//           sim: 0.49190574884414673,
//           doc_id: 766
//         },
//         {
//           sent: 'He added: "Every time you have that soil or rock, whatever it is, that is deposited into the seas, that forces the sea levels to rise because now you\'ve got less space in those oceans because the bottom is moving up."',
//           sim: 0.29157519340515137,
//           doc_id: 767
//         },
//         {sent: 'Please try again later.', sim: 0.15709678828716278, doc_id: 765}
//       ]
//     }
//   ]
// };

// export default testData;
