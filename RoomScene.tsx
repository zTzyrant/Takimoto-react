import * as THREE from 'three'
import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF, SkeletonUtils } from 'three-stdlib'

type ActionName = 'Armature|mixamo.com|Layer0'

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

type GLTFResult = GLTF & {
  nodes: {
    ['Dual_Monitors_on_sit-stand_arm|group112678593|Dupli|5']: THREE.Mesh
    ['Dual_Monitors_on_sit-stand_arm|group1219313228|Dupli|2']: THREE.Mesh
    ['Dual_Monitors_on_sit-stand_arm|group1462626064|Dupli|7']: THREE.Mesh
    ['Dual_Monitors_on_sit-stand_arm|group150401702|Dupli|15_1']: THREE.Mesh
    ['Dual_Monitors_on_sit-stand_arm|group150401702|Dupli|15_2']: THREE.Mesh
    ['Dual_Monitors_on_sit-stand_arm|group1658787459|Dupli|18']: THREE.Mesh
    ['Dual_Monitors_on_sit-stand_arm|group1691283673|Dupli|23_1']: THREE.Mesh
    ['Dual_Monitors_on_sit-stand_arm|group1691283673|Dupli|23_2']: THREE.Mesh
    ['Dual_Monitors_on_sit-stand_arm|group1691283673|Dupli|23_3']: THREE.Mesh
    ['Dual_Monitors_on_sit-stand_arm|group1698824667|Dupli|12']: THREE.Mesh
    ['Dual_Monitors_on_sit-stand_arm|group1746518091|Dupli|8']: THREE.Mesh
    ['Dual_Monitors_on_sit-stand_arm|group1783798096|Dupli|3']: THREE.Mesh
    ['Dual_Monitors_on_sit-stand_arm|group1896072715|Dupli|19']: THREE.Mesh
    ['Dual_Monitors_on_sit-stand_arm|group2060347243|Dupli|9']: THREE.Mesh
    ['Dual_Monitors_on_sit-stand_arm|group2063576334|Dupli|11']: THREE.Mesh
    ['Dual_Monitors_on_sit-stand_arm|group2070617275|Dupli|13']: THREE.Mesh
    ['Dual_Monitors_on_sit-stand_arm|group2128326706|Dupli|16']: THREE.Mesh
    ['Dual_Monitors_on_sit-stand_arm|group329542522|Dupli|_1']: THREE.Mesh
    ['Dual_Monitors_on_sit-stand_arm|group329542522|Dupli|_2']: THREE.Mesh
    ['Dual_Monitors_on_sit-stand_arm|group451364077|Dupli|20']: THREE.Mesh
    ['Dual_Monitors_on_sit-stand_arm|group575146565|Dupli|6']: THREE.Mesh
    ['Dual_Monitors_on_sit-stand_arm|group576947092|Dupli|1_1']: THREE.Mesh
    ['Dual_Monitors_on_sit-stand_arm|group576947092|Dupli|1_2']: THREE.Mesh
    ['Dual_Monitors_on_sit-stand_arm|group625259463|Dupli|4']: THREE.Mesh
    ['Dual_Monitors_on_sit-stand_arm|group710626981|Dupli|14']: THREE.Mesh
    ['Dual_Monitors_on_sit-stand_arm|group786212531|Dupli|21']: THREE.Mesh
    ['Dual_Monitors_on_sit-stand_arm|group860618825|Dupli|22_1']: THREE.Mesh
    ['Dual_Monitors_on_sit-stand_arm|group860618825|Dupli|22_2']: THREE.Mesh
    ['Dual_Monitors_on_sit-stand_arm|group860618825|Dupli|22_3']: THREE.Mesh
    ['Dual_Monitors_on_sit-stand_arm|group929043094|Dupli|10']: THREE.Mesh
    ['Dual_Monitors_on_sit-stand_arm|group974294459|Dupli|17']: THREE.Mesh
    ['Keyboard|group1030983910|Dupli|22']: THREE.Mesh
    ['Keyboard|group1075691498|Dupli|58']: THREE.Mesh
    ['Keyboard|group1149852049|Dupli|53']: THREE.Mesh
    ['Keyboard|group1152190519|Dupli|19']: THREE.Mesh
    ['Keyboard|group1180881246|Dupli|50']: THREE.Mesh
    ['Keyboard|group1238060299|Dupli|28']: THREE.Mesh
    ['Keyboard|group1238428394|Dupli|61']: THREE.Mesh
    ['Keyboard|group1272091893|Dupli|35']: THREE.Mesh
    ['Keyboard|group1316349499|Dupli|39']: THREE.Mesh
    ['Keyboard|group1323238240|Dupli|32']: THREE.Mesh
    ['Keyboard|group145618305|Dupli|23']: THREE.Mesh
    ['Keyboard|group1486350934|Dupli|63']: THREE.Mesh
    ['Keyboard|group150579309|Dupli|11']: THREE.Mesh
    ['Keyboard|group1529968652|Dupli|6']: THREE.Mesh
    ['Keyboard|group1571332333|Dupli|33']: THREE.Mesh
    ['Keyboard|group1581414308|Dupli|8']: THREE.Mesh
    ['Keyboard|group1589752359|Dupli|26']: THREE.Mesh
    ['Keyboard|group1629393722|Dupli|64']: THREE.Mesh
    ['Keyboard|group1629609685|Dupli|21']: THREE.Mesh
    ['Keyboard|group1675960081|Dupli|12']: THREE.Mesh
    ['Keyboard|group1740918352|Dupli|46']: THREE.Mesh
    ['Keyboard|group1753917514|Dupli|5']: THREE.Mesh
    ['Keyboard|group1754683637|Dupli|40']: THREE.Mesh
    ['Keyboard|group1764140354|Dupli|60']: THREE.Mesh
    ['Keyboard|group1870575723|Dupli|65']: THREE.Mesh
    ['Keyboard|group1899843208|Dupli|36']: THREE.Mesh
    ['Keyboard|group1956214489|Dupli|14']: THREE.Mesh
    ['Keyboard|group196400395|Dupli|15']: THREE.Mesh
    ['Keyboard|group1976194690|Dupli|18']: THREE.Mesh
    ['Keyboard|group205302596|Dupli|31']: THREE.Mesh
    ['Keyboard|group2074153597|Dupli|20']: THREE.Mesh
    ['Keyboard|group2085389804|Dupli|57']: THREE.Mesh
    ['Keyboard|group2091112366|Dupli|59']: THREE.Mesh
    ['Keyboard|group2106755496|Dupli|4']: THREE.Mesh
    ['Keyboard|group2146178072|Dupli|38']: THREE.Mesh
    ['Keyboard|group252681800|Dupli|7']: THREE.Mesh
    ['Keyboard|group268332703|Dupli|44']: THREE.Mesh
    ['Keyboard|group287159489|Dupli|13']: THREE.Mesh
    ['Keyboard|group295085766|Dupli|9']: THREE.Mesh
    ['Keyboard|group311988427|Dupli|1']: THREE.Mesh
    ['Keyboard|group34220672|Dupli|34']: THREE.Mesh
    ['Keyboard|group384612072|Dupli|10']: THREE.Mesh
    ['Keyboard|group418912012|Dupli|30']: THREE.Mesh
    ['Keyboard|group42243725|Dupli|37']: THREE.Mesh
    ['Keyboard|group425587018|Dupli|']: THREE.Mesh
    ['Keyboard|group449779970|Dupli|3']: THREE.Mesh
    ['Keyboard|group45382983|Dupli|52']: THREE.Mesh
    ['Keyboard|group475225180|Dupli|41']: THREE.Mesh
    ['Keyboard|group573547017|Dupli|49']: THREE.Mesh
    ['Keyboard|group588539140|Dupli|47']: THREE.Mesh
    ['Keyboard|group601803475|Dupli|25']: THREE.Mesh
    ['Keyboard|group616518658|Dupli|56']: THREE.Mesh
    ['Keyboard|group687259746|Dupli|51']: THREE.Mesh
    ['Keyboard|group706802639|Dupli|17']: THREE.Mesh
    ['Keyboard|group729811280|Dupli|48']: THREE.Mesh
    ['Keyboard|group77921105|Dupli|42']: THREE.Mesh
    ['Keyboard|group790925258|Dupli|54']: THREE.Mesh
    ['Keyboard|group801095923|Dupli|29']: THREE.Mesh
    ['Keyboard|group806343109|Dupli|27']: THREE.Mesh
    ['Keyboard|group826580911|Dupli|24']: THREE.Mesh
    ['Keyboard|group873458270|Dupli|55']: THREE.Mesh
    ['Keyboard|group873558583|Dupli|62']: THREE.Mesh
    ['Keyboard|group877249531|Dupli|66']: THREE.Mesh
    ['Keyboard|group954813675|Dupli|16']: THREE.Mesh
    ['Keyboard|group96314515|Dupli|2']: THREE.Mesh
    ['Keyboard|group96968687|Dupli|43']: THREE.Mesh
    ['Keyboard|group993315105|Dupli|45']: THREE.Mesh
    ['Mug_With_Office_Tool|Mug_with_office_tools|Dupli|']: THREE.Mesh
    ['Notebook|Notebook_Cube041|Dupli|_1']: THREE.Mesh
    ['Notebook|Notebook_Cube041|Dupli|_2']: THREE.Mesh
    ['Notebook|Notebook_Cube041|Dupli|_3']: THREE.Mesh
    ['Soda001|Soda|Dupli|_1']: THREE.Mesh
    ['Soda001|Soda|Dupli|_2']: THREE.Mesh
    ['Calendar-8GqQAqxi3qk_1']: THREE.Mesh
    ['Calendar-8GqQAqxi3qk_2']: THREE.Mesh
    ['Calendar-8GqQAqxi3qk_3']: THREE.Mesh
    ['Calendar-8GqQAqxi3qk_4']: THREE.Mesh
    Desk_1: THREE.Mesh
    Desk_2: THREE.Mesh
    Desk_3: THREE.Mesh
    Desk_4: THREE.Mesh
    Desk_5: THREE.Mesh
    Mouse001: THREE.Mesh
    Mousepad001: THREE.Mesh
    Office_Phone001_1: THREE.Mesh
    Office_Phone001_2: THREE.Mesh
    Office_Phone001_3: THREE.Mesh
    Office_Phone001_4: THREE.Mesh
    Wolf3D_Body: THREE.SkinnedMesh
    Wolf3D_Hair: THREE.SkinnedMesh
    Wolf3D_Outfit_Bottom: THREE.SkinnedMesh
    Wolf3D_Outfit_Footwear: THREE.SkinnedMesh
    Wolf3D_Outfit_Top: THREE.SkinnedMesh
    EyeLeft: THREE.SkinnedMesh
    EyeRight: THREE.SkinnedMesh
    Wolf3D_Head: THREE.SkinnedMesh
    Wolf3D_Teeth: THREE.SkinnedMesh
    Air_Conditioner1: THREE.Mesh
    ['Node-Mesh']: THREE.Mesh
    ['Node-Mesh_1']: THREE.Mesh
    ['Node-Mesh_2']: THREE.Mesh
    ['Node-Mesh_3']: THREE.Mesh
    ['Node-Mesh_4']: THREE.Mesh
    ['Node-Mesh_5']: THREE.Mesh
    ['Node-Mesh003']: THREE.Mesh
    ['Node-Mesh003_1']: THREE.Mesh
    ['Node-Mesh003_2']: THREE.Mesh
    ['Node-Mesh003_3']: THREE.Mesh
    Plane: THREE.Mesh
    group11151369: THREE.Mesh
    group47713880: THREE.Mesh
    group47846800: THREE.Mesh
    group54598879: THREE.Mesh
    group56262870: THREE.Mesh
    group73605351: THREE.Mesh
    group79611238: THREE.Mesh
    group95314420: THREE.Mesh
    group109271366: THREE.Mesh
    group120898098: THREE.Mesh
    mesh139018155: THREE.Mesh
    mesh139018155_1: THREE.Mesh
    mesh148538432: THREE.Mesh
    mesh148538432_1: THREE.Mesh
    mesh172225094: THREE.Mesh
    mesh172225094_1: THREE.Mesh
    group191747226: THREE.Mesh
    group194524521: THREE.Mesh
    group229424706: THREE.Mesh
    group239182004: THREE.Mesh
    group246477310: THREE.Mesh
    group252333627: THREE.Mesh
    group287848248: THREE.Mesh
    group289168744: THREE.Mesh
    group310832378: THREE.Mesh
    group311705158: THREE.Mesh
    group332402059: THREE.Mesh
    group335831164: THREE.Mesh
    group358629412: THREE.Mesh
    group360414338: THREE.Mesh
    group367993755: THREE.Mesh
    group376269877: THREE.Mesh
    group377627692: THREE.Mesh
    mesh381560967: THREE.Mesh
    mesh381560967_1: THREE.Mesh
    group395313063: THREE.Mesh
    group417210971: THREE.Mesh
    group438055053: THREE.Mesh
    group458008891: THREE.Mesh
    group508965083: THREE.Mesh
    mesh549538436: THREE.Mesh
    mesh549538436_1: THREE.Mesh
    mesh549538436_2: THREE.Mesh
    mesh562682276: THREE.Mesh
    mesh562682276_1: THREE.Mesh
    group563957055: THREE.Mesh
    group573210084: THREE.Mesh
    group587275507: THREE.Mesh
    group602345555: THREE.Mesh
    group602384715: THREE.Mesh
    mesh614062749: THREE.Mesh
    mesh614062749_1: THREE.Mesh
    mesh614062749_2: THREE.Mesh
    mesh619239296: THREE.Mesh
    mesh619239296_1: THREE.Mesh
    group667732097: THREE.Mesh
    group675547103: THREE.Mesh
    group676590036: THREE.Mesh
    group676697694: THREE.Mesh
    group701415949: THREE.Mesh
    group704994766: THREE.Mesh
    group706968164: THREE.Mesh
    group713359564: THREE.Mesh
    group731708330: THREE.Mesh
    group740024917: THREE.Mesh
    group741402870: THREE.Mesh
    group761930540: THREE.Mesh
    group774251851: THREE.Mesh
    group833559944: THREE.Mesh
    group854105041: THREE.Mesh
    group886964551: THREE.Mesh
    mesh892610586: THREE.Mesh
    mesh892610586_1: THREE.Mesh
    group893749766: THREE.Mesh
    group897881202: THREE.Mesh
    group912049542: THREE.Mesh
    group935673430: THREE.Mesh
    group952295781: THREE.Mesh
    group961377794: THREE.Mesh
    group968331571: THREE.Mesh
    mesh997898928: THREE.Mesh
    mesh997898928_1: THREE.Mesh
    mesh1002021246: THREE.Mesh
    mesh1002021246_1: THREE.Mesh
    group1004135894: THREE.Mesh
    group1013654719: THREE.Mesh
    group1017920957: THREE.Mesh
    group1033487155: THREE.Mesh
    group1050079147: THREE.Mesh
    group1051984110: THREE.Mesh
    mesh1125399115: THREE.Mesh
    mesh1125399115_1: THREE.Mesh
    group1144869753: THREE.Mesh
    group1158745515: THREE.Mesh
    group1179872976: THREE.Mesh
    group1186992705: THREE.Mesh
    mesh1207655705: THREE.Mesh
    mesh1207655705_1: THREE.Mesh
    mesh1207655705_2: THREE.Mesh
    group1216547099: THREE.Mesh
    mesh1221721378: THREE.Mesh
    mesh1221721378_1: THREE.Mesh
    group1247630253: THREE.Mesh
    mesh1264231965: THREE.Mesh
    mesh1264231965_1: THREE.Mesh
    group1275655566: THREE.Mesh
    group1280736543: THREE.Mesh
    group1297143275: THREE.Mesh
    group1324414297: THREE.Mesh
    group1332034770: THREE.Mesh
    group1338682067: THREE.Mesh
    group1350575126: THREE.Mesh
    group1381102080: THREE.Mesh
    group1395154075: THREE.Mesh
    mesh1403192981: THREE.Mesh
    mesh1403192981_1: THREE.Mesh
    mesh1403192981_2: THREE.Mesh
    group1403669828: THREE.Mesh
    group1403985160: THREE.Mesh
    group1411416077: THREE.Mesh
    mesh1456472197: THREE.Mesh
    mesh1456472197_1: THREE.Mesh
    mesh1517310649: THREE.Mesh
    mesh1517310649_1: THREE.Mesh
    group1526395978: THREE.Mesh
    group1548294784: THREE.Mesh
    group1554204416: THREE.Mesh
    group1562485891: THREE.Mesh
    group1578493595: THREE.Mesh
    group1586564780: THREE.Mesh
    group1601213803: THREE.Mesh
    group1620621923: THREE.Mesh
    group1634298705: THREE.Mesh
    group1644871367: THREE.Mesh
    group1664409649: THREE.Mesh
    mesh1693732898: THREE.Mesh
    mesh1693732898_1: THREE.Mesh
    group1714365479: THREE.Mesh
    mesh1722992837: THREE.Mesh
    mesh1722992837_1: THREE.Mesh
    group1724716729: THREE.Mesh
    group1739615239: THREE.Mesh
    group1747962436: THREE.Mesh
    mesh1754797367: THREE.Mesh
    mesh1754797367_1: THREE.Mesh
    mesh1783485154: THREE.Mesh
    mesh1783485154_1: THREE.Mesh
    group1788593855: THREE.Mesh
    group1799134820: THREE.Mesh
    group1799644813: THREE.Mesh
    group1800416953: THREE.Mesh
    group1809112506: THREE.Mesh
    group1817044955: THREE.Mesh
    mesh1841586256: THREE.Mesh
    mesh1841586256_1: THREE.Mesh
    group1851189319: THREE.Mesh
    group1851977708: THREE.Mesh
    group1867655503: THREE.Mesh
    group1874588551: THREE.Mesh
    group1876175818: THREE.Mesh
    mesh1882511964: THREE.Mesh
    mesh1882511964_1: THREE.Mesh
    mesh1882511964_2: THREE.Mesh
    group1961792104: THREE.Mesh
    group1977161757: THREE.Mesh
    group2011638665: THREE.Mesh
    group2024160734: THREE.Mesh
    mesh2029488445: THREE.Mesh
    mesh2029488445_1: THREE.Mesh
    group2032200821: THREE.Mesh
    group2061932718: THREE.Mesh
    group2083473735: THREE.Mesh
    group2094616060: THREE.Mesh
    group2101908238: THREE.Mesh
    group2102640996: THREE.Mesh
    group2577447: THREE.Mesh
    group159381947: THREE.Mesh
    group206941786: THREE.Mesh
    group218843811: THREE.Mesh
    group258849837: THREE.Mesh
    group285218960: THREE.Mesh
    group287812142: THREE.Mesh
    group589443044: THREE.Mesh
    group841292617: THREE.Mesh
    mesh1066987434: THREE.Mesh
    mesh1066987434_1: THREE.Mesh
    mesh1066987434_2: THREE.Mesh
    group1245885350: THREE.Mesh
    group1329329239: THREE.Mesh
    group1429174951: THREE.Mesh
    mesh1602327308: THREE.Mesh
    mesh1602327308_1: THREE.Mesh
    group1678679790: THREE.Mesh
    group1765619652: THREE.Mesh
    group1782178297: THREE.Mesh
    group1792446406: THREE.Mesh
    group1959835629: THREE.Mesh
    group2045129996: THREE.Mesh
    group2146201506: THREE.Mesh
    Hips: THREE.Bone
  }
  materials: {
    ['mat22.010']: THREE.MeshStandardMaterial
    ['mat23.015']: THREE.MeshStandardMaterial
    ['mat21.012']: THREE.MeshStandardMaterial
    ['mat21.013']: THREE.MeshStandardMaterial
    ['mat16.006']: THREE.MeshStandardMaterial
    ['mat22.011']: THREE.MeshStandardMaterial
    ['mat9.002']: THREE.MeshStandardMaterial
    ['Material.015']: THREE.MeshStandardMaterial
    ['FFEB3B.002']: THREE.MeshStandardMaterial
    ['795548.003']: THREE.MeshStandardMaterial
    ['F44336.006']: THREE.MeshStandardMaterial
    ['White.005']: THREE.MeshStandardMaterial
    ['Red.002']: THREE.MeshStandardMaterial
    Calendar_Texture: THREE.MeshStandardMaterial
    Calendar_Aquamarine: THREE.MeshStandardMaterial
    Calendar_Ivory: THREE.MeshStandardMaterial
    FrontColor: THREE.MeshStandardMaterial
    BlackCoatSteel: THREE.MeshStandardMaterial
    GrayPlastic: THREE.MeshStandardMaterial
    WhiteSteelScrew: THREE.MeshStandardMaterial
    BlackPlastic: THREE.MeshStandardMaterial
    BlackWood: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    Mousepad: THREE.MeshStandardMaterial
    ['Light grey']: THREE.MeshStandardMaterial
    ['Grey Plastic']: THREE.MeshStandardMaterial
    Screen: THREE.MeshStandardMaterial
    ['Dark Grey Plastic']: THREE.MeshStandardMaterial
    Wolf3D_Body: THREE.MeshStandardMaterial
    Wolf3D_Hair: THREE.MeshStandardMaterial
    Wolf3D_Outfit_Bottom: THREE.MeshStandardMaterial
    Wolf3D_Outfit_Footwear: THREE.MeshStandardMaterial
    Wolf3D_Outfit_Top: THREE.MeshStandardMaterial
    Wolf3D_Eye: THREE.MeshStandardMaterial
    Wolf3D_Skin: THREE.MeshStandardMaterial
    Wolf3D_Teeth: THREE.MeshStandardMaterial
    lambert3SG: THREE.MeshStandardMaterial
    ['mat3.001']: THREE.MeshStandardMaterial
    ['mat12.002']: THREE.MeshStandardMaterial
    ['mat15.001']: THREE.MeshStandardMaterial
    ['mat21.002']: THREE.MeshStandardMaterial
    ['mat23.002']: THREE.MeshStandardMaterial
    ['mat8.002']: THREE.MeshStandardMaterial
    ['Executive.001']: THREE.MeshStandardMaterial
    ['Executive__1.001']: THREE.MeshStandardMaterial
    ['Executive__2.001']: THREE.MeshStandardMaterial
    ['Executive__3.001']: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    mat23: THREE.MeshStandardMaterial
    mat11: THREE.MeshStandardMaterial
    mat3: THREE.MeshStandardMaterial
    mat15: THREE.MeshStandardMaterial
    mat17: THREE.MeshStandardMaterial
    mat22: THREE.MeshStandardMaterial
    mat16: THREE.MeshStandardMaterial
    mat10: THREE.MeshStandardMaterial
    mat21: THREE.MeshStandardMaterial
    mat8: THREE.MeshStandardMaterial
    mat24: THREE.MeshStandardMaterial
    mat13: THREE.MeshStandardMaterial
    mat5: THREE.MeshStandardMaterial
    mat9: THREE.MeshStandardMaterial
    mat2: THREE.MeshStandardMaterial
    mat12: THREE.MeshStandardMaterial
    ['mat2.001']: THREE.MeshStandardMaterial
    mat7: THREE.MeshStandardMaterial
    ['mat13.001']: THREE.MeshStandardMaterial
    ['mat5.001']: THREE.MeshStandardMaterial
    mat18: THREE.MeshStandardMaterial
    ['mat12.001']: THREE.MeshStandardMaterial
    ['mat23.001']: THREE.MeshStandardMaterial
    mat20: THREE.MeshStandardMaterial
    ['mat21.001']: THREE.MeshStandardMaterial
    ['mat22.001']: THREE.MeshStandardMaterial
    ['mat8.001']: THREE.MeshStandardMaterial
    ['mat9.001']: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = React.useRef<THREE.Group>()
  const { scene } = useGLTF('/roomScene.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials, animations } = useGraph(clone) as GLTFResult
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="RootNode" position={[7.896, 0, -1.313]} rotation={[0, 1.541, 0]}>
          <group name="Dual_Monitors_on_sit-stand_arm" position={[-0.294, 1.36, -6.337]} rotation={[-Math.PI / 2, 0, 0]} scale={30.19}>
            <mesh name="Dual_Monitors_on_sit-stand_arm|group112678593|Dupli|5" geometry={nodes['Dual_Monitors_on_sit-stand_arm|group112678593|Dupli|5'].geometry} material={materials['mat22.010']} />
            <mesh name="Dual_Monitors_on_sit-stand_arm|group1219313228|Dupli|2" geometry={nodes['Dual_Monitors_on_sit-stand_arm|group1219313228|Dupli|2'].geometry} material={materials['mat22.010']} />
            <mesh name="Dual_Monitors_on_sit-stand_arm|group1462626064|Dupli|7" geometry={nodes['Dual_Monitors_on_sit-stand_arm|group1462626064|Dupli|7'].geometry} material={materials['mat22.010']} />
            <group name="Dual_Monitors_on_sit-stand_arm|group150401702|Dupli|15" position={[0, 0, -0.003]} scale={[1, 1, 1.696]}>
              <mesh name="Dual_Monitors_on_sit-stand_arm|group150401702|Dupli|15_1" geometry={nodes['Dual_Monitors_on_sit-stand_arm|group150401702|Dupli|15_1'].geometry} material={materials['mat22.010']} />
              <mesh name="Dual_Monitors_on_sit-stand_arm|group150401702|Dupli|15_2" geometry={nodes['Dual_Monitors_on_sit-stand_arm|group150401702|Dupli|15_2'].geometry} material={materials['mat23.015']} />
            </group>
            <mesh name="Dual_Monitors_on_sit-stand_arm|group1658787459|Dupli|18" geometry={nodes['Dual_Monitors_on_sit-stand_arm|group1658787459|Dupli|18'].geometry} material={materials['mat22.010']} />
            <group name="Dual_Monitors_on_sit-stand_arm|group1691283673|Dupli|23">
              <mesh name="Dual_Monitors_on_sit-stand_arm|group1691283673|Dupli|23_1" geometry={nodes['Dual_Monitors_on_sit-stand_arm|group1691283673|Dupli|23_1'].geometry} material={materials['mat22.010']} />
              <mesh name="Dual_Monitors_on_sit-stand_arm|group1691283673|Dupli|23_2" geometry={nodes['Dual_Monitors_on_sit-stand_arm|group1691283673|Dupli|23_2'].geometry} material={materials['mat23.015']} />
              <mesh name="Dual_Monitors_on_sit-stand_arm|group1691283673|Dupli|23_3" geometry={nodes['Dual_Monitors_on_sit-stand_arm|group1691283673|Dupli|23_3'].geometry} material={materials['mat21.012']} />
            </group>
            <mesh name="Dual_Monitors_on_sit-stand_arm|group1698824667|Dupli|12" geometry={nodes['Dual_Monitors_on_sit-stand_arm|group1698824667|Dupli|12'].geometry} material={materials['mat22.010']} />
            <mesh name="Dual_Monitors_on_sit-stand_arm|group1746518091|Dupli|8" geometry={nodes['Dual_Monitors_on_sit-stand_arm|group1746518091|Dupli|8'].geometry} material={materials['mat23.015']} />
            <mesh name="Dual_Monitors_on_sit-stand_arm|group1783798096|Dupli|3" geometry={nodes['Dual_Monitors_on_sit-stand_arm|group1783798096|Dupli|3'].geometry} material={materials['mat23.015']} />
            <mesh name="Dual_Monitors_on_sit-stand_arm|group1896072715|Dupli|19" geometry={nodes['Dual_Monitors_on_sit-stand_arm|group1896072715|Dupli|19'].geometry} material={materials['mat22.010']} />
            <mesh name="Dual_Monitors_on_sit-stand_arm|group2060347243|Dupli|9" geometry={nodes['Dual_Monitors_on_sit-stand_arm|group2060347243|Dupli|9'].geometry} material={materials['mat22.010']} />
            <mesh name="Dual_Monitors_on_sit-stand_arm|group2063576334|Dupli|11" geometry={nodes['Dual_Monitors_on_sit-stand_arm|group2063576334|Dupli|11'].geometry} material={materials['mat22.010']} />
            <mesh name="Dual_Monitors_on_sit-stand_arm|group2070617275|Dupli|13" geometry={nodes['Dual_Monitors_on_sit-stand_arm|group2070617275|Dupli|13'].geometry} material={materials['mat23.015']} />
            <mesh name="Dual_Monitors_on_sit-stand_arm|group2128326706|Dupli|16" geometry={nodes['Dual_Monitors_on_sit-stand_arm|group2128326706|Dupli|16'].geometry} material={materials['mat23.015']} />
            <group name="Dual_Monitors_on_sit-stand_arm|group329542522|Dupli|">
              <mesh name="Dual_Monitors_on_sit-stand_arm|group329542522|Dupli|_1" geometry={nodes['Dual_Monitors_on_sit-stand_arm|group329542522|Dupli|_1'].geometry} material={materials['mat22.010']} />
              <mesh name="Dual_Monitors_on_sit-stand_arm|group329542522|Dupli|_2" geometry={nodes['Dual_Monitors_on_sit-stand_arm|group329542522|Dupli|_2'].geometry} material={materials['mat23.015']} />
            </group>
            <mesh name="Dual_Monitors_on_sit-stand_arm|group451364077|Dupli|20" geometry={nodes['Dual_Monitors_on_sit-stand_arm|group451364077|Dupli|20'].geometry} material={materials['mat22.010']} />
            <mesh name="Dual_Monitors_on_sit-stand_arm|group575146565|Dupli|6" geometry={nodes['Dual_Monitors_on_sit-stand_arm|group575146565|Dupli|6'].geometry} material={materials['mat22.010']} />
            <group name="Dual_Monitors_on_sit-stand_arm|group576947092|Dupli|1">
              <mesh name="Dual_Monitors_on_sit-stand_arm|group576947092|Dupli|1_1" geometry={nodes['Dual_Monitors_on_sit-stand_arm|group576947092|Dupli|1_1'].geometry} material={materials['mat22.010']} />
              <mesh name="Dual_Monitors_on_sit-stand_arm|group576947092|Dupli|1_2" geometry={nodes['Dual_Monitors_on_sit-stand_arm|group576947092|Dupli|1_2'].geometry} material={materials['mat23.015']} />
            </group>
            <mesh name="Dual_Monitors_on_sit-stand_arm|group625259463|Dupli|4" geometry={nodes['Dual_Monitors_on_sit-stand_arm|group625259463|Dupli|4'].geometry} material={materials['mat23.015']} />
            <mesh name="Dual_Monitors_on_sit-stand_arm|group710626981|Dupli|14" geometry={nodes['Dual_Monitors_on_sit-stand_arm|group710626981|Dupli|14'].geometry} material={materials['mat22.010']} />
            <mesh name="Dual_Monitors_on_sit-stand_arm|group786212531|Dupli|21" geometry={nodes['Dual_Monitors_on_sit-stand_arm|group786212531|Dupli|21'].geometry} material={materials['mat22.010']} />
            <group name="Dual_Monitors_on_sit-stand_arm|group860618825|Dupli|22">
              <mesh name="Dual_Monitors_on_sit-stand_arm|group860618825|Dupli|22_1" geometry={nodes['Dual_Monitors_on_sit-stand_arm|group860618825|Dupli|22_1'].geometry} material={materials['mat22.010']} />
              <mesh name="Dual_Monitors_on_sit-stand_arm|group860618825|Dupli|22_2" geometry={nodes['Dual_Monitors_on_sit-stand_arm|group860618825|Dupli|22_2'].geometry} material={materials['mat23.015']} />
              <mesh name="Dual_Monitors_on_sit-stand_arm|group860618825|Dupli|22_3" geometry={nodes['Dual_Monitors_on_sit-stand_arm|group860618825|Dupli|22_3'].geometry} material={materials['mat21.012']} />
            </group>
            <mesh name="Dual_Monitors_on_sit-stand_arm|group929043094|Dupli|10" geometry={nodes['Dual_Monitors_on_sit-stand_arm|group929043094|Dupli|10'].geometry} material={materials['mat22.010']} />
            <mesh name="Dual_Monitors_on_sit-stand_arm|group974294459|Dupli|17" geometry={nodes['Dual_Monitors_on_sit-stand_arm|group974294459|Dupli|17'].geometry} material={materials['mat23.015']} position={[0, 0, -0.007]} />
          </group>
          <group name="Keyboard" position={[-0.284, 1.005, -6.704]} rotation={[-1.576, -0.001, 3.102]} scale={20.517}>
            <mesh name="Keyboard|group1030983910|Dupli|22" geometry={nodes['Keyboard|group1030983910|Dupli|22'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group1075691498|Dupli|58" geometry={nodes['Keyboard|group1075691498|Dupli|58'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group1149852049|Dupli|53" geometry={nodes['Keyboard|group1149852049|Dupli|53'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group1152190519|Dupli|19" geometry={nodes['Keyboard|group1152190519|Dupli|19'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group1180881246|Dupli|50" geometry={nodes['Keyboard|group1180881246|Dupli|50'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group1238060299|Dupli|28" geometry={nodes['Keyboard|group1238060299|Dupli|28'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group1238428394|Dupli|61" geometry={nodes['Keyboard|group1238428394|Dupli|61'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group1272091893|Dupli|35" geometry={nodes['Keyboard|group1272091893|Dupli|35'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group1316349499|Dupli|39" geometry={nodes['Keyboard|group1316349499|Dupli|39'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group1323238240|Dupli|32" geometry={nodes['Keyboard|group1323238240|Dupli|32'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group145618305|Dupli|23" geometry={nodes['Keyboard|group145618305|Dupli|23'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group1486350934|Dupli|63" geometry={nodes['Keyboard|group1486350934|Dupli|63'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group150579309|Dupli|11" geometry={nodes['Keyboard|group150579309|Dupli|11'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group1529968652|Dupli|6" geometry={nodes['Keyboard|group1529968652|Dupli|6'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group1571332333|Dupli|33" geometry={nodes['Keyboard|group1571332333|Dupli|33'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group1581414308|Dupli|8" geometry={nodes['Keyboard|group1581414308|Dupli|8'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group1589752359|Dupli|26" geometry={nodes['Keyboard|group1589752359|Dupli|26'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group1629393722|Dupli|64" geometry={nodes['Keyboard|group1629393722|Dupli|64'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group1629609685|Dupli|21" geometry={nodes['Keyboard|group1629609685|Dupli|21'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group1675960081|Dupli|12" geometry={nodes['Keyboard|group1675960081|Dupli|12'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group1740918352|Dupli|46" geometry={nodes['Keyboard|group1740918352|Dupli|46'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group1753917514|Dupli|5" geometry={nodes['Keyboard|group1753917514|Dupli|5'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group1754683637|Dupli|40" geometry={nodes['Keyboard|group1754683637|Dupli|40'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group1764140354|Dupli|60" geometry={nodes['Keyboard|group1764140354|Dupli|60'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group1870575723|Dupli|65" geometry={nodes['Keyboard|group1870575723|Dupli|65'].geometry} material={materials['mat16.006']} />
            <mesh name="Keyboard|group1899843208|Dupli|36" geometry={nodes['Keyboard|group1899843208|Dupli|36'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group1956214489|Dupli|14" geometry={nodes['Keyboard|group1956214489|Dupli|14'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group196400395|Dupli|15" geometry={nodes['Keyboard|group196400395|Dupli|15'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group1976194690|Dupli|18" geometry={nodes['Keyboard|group1976194690|Dupli|18'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group205302596|Dupli|31" geometry={nodes['Keyboard|group205302596|Dupli|31'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group2074153597|Dupli|20" geometry={nodes['Keyboard|group2074153597|Dupli|20'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group2085389804|Dupli|57" geometry={nodes['Keyboard|group2085389804|Dupli|57'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group2091112366|Dupli|59" geometry={nodes['Keyboard|group2091112366|Dupli|59'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group2106755496|Dupli|4" geometry={nodes['Keyboard|group2106755496|Dupli|4'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group2146178072|Dupli|38" geometry={nodes['Keyboard|group2146178072|Dupli|38'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group252681800|Dupli|7" geometry={nodes['Keyboard|group252681800|Dupli|7'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group268332703|Dupli|44" geometry={nodes['Keyboard|group268332703|Dupli|44'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group287159489|Dupli|13" geometry={nodes['Keyboard|group287159489|Dupli|13'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group295085766|Dupli|9" geometry={nodes['Keyboard|group295085766|Dupli|9'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group311988427|Dupli|1" geometry={nodes['Keyboard|group311988427|Dupli|1'].geometry} material={materials['mat22.011']} />
            <mesh name="Keyboard|group34220672|Dupli|34" geometry={nodes['Keyboard|group34220672|Dupli|34'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group384612072|Dupli|10" geometry={nodes['Keyboard|group384612072|Dupli|10'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group418912012|Dupli|30" geometry={nodes['Keyboard|group418912012|Dupli|30'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group42243725|Dupli|37" geometry={nodes['Keyboard|group42243725|Dupli|37'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group425587018|Dupli|" geometry={nodes['Keyboard|group425587018|Dupli|'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group449779970|Dupli|3" geometry={nodes['Keyboard|group449779970|Dupli|3'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group45382983|Dupli|52" geometry={nodes['Keyboard|group45382983|Dupli|52'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group475225180|Dupli|41" geometry={nodes['Keyboard|group475225180|Dupli|41'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group573547017|Dupli|49" geometry={nodes['Keyboard|group573547017|Dupli|49'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group588539140|Dupli|47" geometry={nodes['Keyboard|group588539140|Dupli|47'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group601803475|Dupli|25" geometry={nodes['Keyboard|group601803475|Dupli|25'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group616518658|Dupli|56" geometry={nodes['Keyboard|group616518658|Dupli|56'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group687259746|Dupli|51" geometry={nodes['Keyboard|group687259746|Dupli|51'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group706802639|Dupli|17" geometry={nodes['Keyboard|group706802639|Dupli|17'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group729811280|Dupli|48" geometry={nodes['Keyboard|group729811280|Dupli|48'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group77921105|Dupli|42" geometry={nodes['Keyboard|group77921105|Dupli|42'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group790925258|Dupli|54" geometry={nodes['Keyboard|group790925258|Dupli|54'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group801095923|Dupli|29" geometry={nodes['Keyboard|group801095923|Dupli|29'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group806343109|Dupli|27" geometry={nodes['Keyboard|group806343109|Dupli|27'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group826580911|Dupli|24" geometry={nodes['Keyboard|group826580911|Dupli|24'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group873458270|Dupli|55" geometry={nodes['Keyboard|group873458270|Dupli|55'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group873558583|Dupli|62" geometry={nodes['Keyboard|group873558583|Dupli|62'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group877249531|Dupli|66" geometry={nodes['Keyboard|group877249531|Dupli|66'].geometry} material={materials['mat9.002']} />
            <mesh name="Keyboard|group954813675|Dupli|16" geometry={nodes['Keyboard|group954813675|Dupli|16'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group96314515|Dupli|2" geometry={nodes['Keyboard|group96314515|Dupli|2'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group96968687|Dupli|43" geometry={nodes['Keyboard|group96968687|Dupli|43'].geometry} material={materials['mat21.013']} />
            <mesh name="Keyboard|group993315105|Dupli|45" geometry={nodes['Keyboard|group993315105|Dupli|45'].geometry} material={materials['mat21.013']} />
          </group>
          <group name="Mug_With_Office_Tool" position={[-0.805, 0.937, -6.105]} rotation={[-Math.PI / 2, 0, 0]} scale={129.646}>
            <mesh name="Mug_With_Office_Tool|Mug_with_office_tools|Dupli|" geometry={nodes['Mug_With_Office_Tool|Mug_with_office_tools|Dupli|'].geometry} material={materials['Material.015']} scale={100} />
          </group>
          <group name="Notebook" position={[0.255, 0.942, -6.492]} rotation={[-Math.PI / 2, 0, -2.857]} scale={3.1}>
            <group name="Notebook|Notebook_Cube041|Dupli|">
              <mesh name="Notebook|Notebook_Cube041|Dupli|_1" geometry={nodes['Notebook|Notebook_Cube041|Dupli|_1'].geometry} material={materials['FFEB3B.002']} />
              <mesh name="Notebook|Notebook_Cube041|Dupli|_2" geometry={nodes['Notebook|Notebook_Cube041|Dupli|_2'].geometry} material={materials['795548.003']} />
              <mesh name="Notebook|Notebook_Cube041|Dupli|_3" geometry={nodes['Notebook|Notebook_Cube041|Dupli|_3'].geometry} material={materials['F44336.006']} />
            </group>
          </group>
          <group name="Soda001" position={[-1.161, 0.942, -6.524]} rotation={[-Math.PI / 2, 0, 0]} scale={18.63}>
            <group name="Soda001|Soda|Dupli|" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
              <mesh name="Soda001|Soda|Dupli|_1" geometry={nodes['Soda001|Soda|Dupli|_1'].geometry} material={materials['White.005']} />
              <mesh name="Soda001|Soda|Dupli|_2" geometry={nodes['Soda001|Soda|Dupli|_2'].geometry} material={materials['Red.002']} />
            </group>
          </group>
          <group name="Calendar-8GqQAqxi3qk" position={[-1.101, 0.942, -6.167]} rotation={[-Math.PI / 2, 0, 2.753]} scale={1.243}>
            <mesh name="Calendar-8GqQAqxi3qk_1" geometry={nodes['Calendar-8GqQAqxi3qk_1'].geometry} material={materials.Calendar_Texture} />
            <mesh name="Calendar-8GqQAqxi3qk_2" geometry={nodes['Calendar-8GqQAqxi3qk_2'].geometry} material={materials.Calendar_Aquamarine} />
            <mesh name="Calendar-8GqQAqxi3qk_3" geometry={nodes['Calendar-8GqQAqxi3qk_3'].geometry} material={materials.Calendar_Ivory} />
            <mesh name="Calendar-8GqQAqxi3qk_4" geometry={nodes['Calendar-8GqQAqxi3qk_4'].geometry} material={materials.FrontColor} />
          </group>
          <group name="Desk" position={[-0.456, 0, -6.33]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100}>
            <mesh name="Desk_1" geometry={nodes.Desk_1.geometry} material={materials.BlackCoatSteel} />
            <mesh name="Desk_2" geometry={nodes.Desk_2.geometry} material={materials.GrayPlastic} />
            <mesh name="Desk_3" geometry={nodes.Desk_3.geometry} material={materials.WhiteSteelScrew} />
            <mesh name="Desk_4" geometry={nodes.Desk_4.geometry} material={materials.BlackPlastic} />
            <mesh name="Desk_5" geometry={nodes.Desk_5.geometry} material={materials.BlackWood} />
          </group>
          <mesh name="Mouse001" geometry={nodes.Mouse001.geometry} material={materials['Material.001']} position={[-0.659, 0.942, -6.549]} rotation={[-Math.PI / 2, 0, -2.69]} scale={[9999.999, 9999.999, 10000]} />
          <mesh name="Mousepad001" geometry={nodes.Mousepad001.geometry} material={materials.Mousepad} position={[-0.682, 0.944, -6.507]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[17.231, 20.977, 0.228]} />
          <group name="Office_Phone001" position={[0.338, 1.01, -6.188]} rotation={[0, 0.144, Math.PI]} scale={781.608}>
            <mesh name="Office_Phone001_1" geometry={nodes.Office_Phone001_1.geometry} material={materials['Light grey']} />
            <mesh name="Office_Phone001_2" geometry={nodes.Office_Phone001_2.geometry} material={materials['Grey Plastic']} />
            <mesh name="Office_Phone001_3" geometry={nodes.Office_Phone001_3.geometry} material={materials.Screen} />
            <mesh name="Office_Phone001_4" geometry={nodes.Office_Phone001_4.geometry} material={materials['Dark Grey Plastic']} />
          </group>
        </group>
        <group name="characterTyping" position={[1.03, 0.852, -0.84]} rotation={[-Math.PI, 1.489, -Math.PI]} scale={1.372}>
          <group name="Armature" position={[0.174, -0.616, -0.513]}>
            <primitive object={nodes.Hips} />
          </group>
          <skinnedMesh name="Wolf3D_Body" geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body.skeleton} />
          <skinnedMesh name="Wolf3D_Hair" geometry={nodes.Wolf3D_Hair.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Bottom" geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Footwear" geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Top" geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
          <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft.skeleton} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
          <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight.skeleton} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />
        </group>
        <mesh name="Air_Conditioner1" geometry={nodes.Air_Conditioner1.geometry} material={materials.lambert3SG} position={[1.855, 2.447, -0.878]} rotation={[0, -Math.PI / 2, 0]} scale={0.002} />
        <group name="Node" position={[2.02, 1.721, -0.64]} rotation={[-Math.PI, 0.021, -Math.PI]}>
          <mesh name="Node-Mesh" geometry={nodes['Node-Mesh'].geometry} material={materials['mat3.001']} />
          <mesh name="Node-Mesh_1" geometry={nodes['Node-Mesh_1'].geometry} material={materials['mat12.002']} />
          <mesh name="Node-Mesh_2" geometry={nodes['Node-Mesh_2'].geometry} material={materials['mat15.001']} />
          <mesh name="Node-Mesh_3" geometry={nodes['Node-Mesh_3'].geometry} material={materials['mat21.002']} />
          <mesh name="Node-Mesh_4" geometry={nodes['Node-Mesh_4'].geometry} material={materials['mat23.002']} />
          <mesh name="Node-Mesh_5" geometry={nodes['Node-Mesh_5'].geometry} material={materials['mat8.002']} />
        </group>
        <group name="Node001" position={[0.36, 0.291, -1.109]} rotation={[-Math.PI, 1.556, -Math.PI]} scale={[0.038, 0.031, 0.038]}>
          <mesh name="Node-Mesh003" geometry={nodes['Node-Mesh003'].geometry} material={materials['Executive.001']} />
          <mesh name="Node-Mesh003_1" geometry={nodes['Node-Mesh003_1'].geometry} material={materials['Executive__1.001']} />
          <mesh name="Node-Mesh003_2" geometry={nodes['Node-Mesh003_2'].geometry} material={materials['Executive__2.001']} />
          <mesh name="Node-Mesh003_3" geometry={nodes['Node-Mesh003_3'].geometry} material={materials['Executive__3.001']} />
        </group>
        <mesh name="Plane" geometry={nodes.Plane.geometry} material={materials['Material.002']} scale={2.048} />
        <mesh name="group11151369" geometry={nodes.group11151369.geometry} material={materials.mat23} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group47713880" geometry={nodes.group47713880.geometry} material={materials.mat23} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group47846800" geometry={nodes.group47846800.geometry} material={materials.mat11} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group54598879" geometry={nodes.group54598879.geometry} material={materials.mat3} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group56262870" geometry={nodes.group56262870.geometry} material={materials.mat23} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group73605351" geometry={nodes.group73605351.geometry} material={materials.mat15} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group79611238" geometry={nodes.group79611238.geometry} material={materials.mat17} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group95314420" geometry={nodes.group95314420.geometry} material={materials.mat11} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group109271366" geometry={nodes.group109271366.geometry} material={materials.mat23} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group120898098" geometry={nodes.group120898098.geometry} material={materials.mat22} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <group name="group139018155" position={[1.747, 0.323, -1.592]} scale={0.308}>
          <mesh name="mesh139018155" geometry={nodes.mesh139018155.geometry} material={materials.mat23} />
          <mesh name="mesh139018155_1" geometry={nodes.mesh139018155_1.geometry} material={materials.mat16} />
        </group>
        <group name="group148538432" position={[1.747, 0.323, -1.592]} scale={0.308}>
          <mesh name="mesh148538432" geometry={nodes.mesh148538432.geometry} material={materials.mat16} />
          <mesh name="mesh148538432_1" geometry={nodes.mesh148538432_1.geometry} material={materials.mat23} />
        </group>
        <group name="group172225094" position={[1.747, 0.323, -1.592]} scale={0.308}>
          <mesh name="mesh172225094" geometry={nodes.mesh172225094.geometry} material={materials.mat17} />
          <mesh name="mesh172225094_1" geometry={nodes.mesh172225094_1.geometry} material={materials.mat23} />
        </group>
        <mesh name="group191747226" geometry={nodes.group191747226.geometry} material={materials.mat23} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group194524521" geometry={nodes.group194524521.geometry} material={materials.mat3} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group229424706" geometry={nodes.group229424706.geometry} material={materials.mat23} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group239182004" geometry={nodes.group239182004.geometry} material={materials.mat15} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group246477310" geometry={nodes.group246477310.geometry} material={materials.mat17} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group252333627" geometry={nodes.group252333627.geometry} material={materials.mat22} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group287848248" geometry={nodes.group287848248.geometry} material={materials.mat15} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group289168744" geometry={nodes.group289168744.geometry} material={materials.mat17} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group310832378" geometry={nodes.group310832378.geometry} material={materials.mat15} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group311705158" geometry={nodes.group311705158.geometry} material={materials.mat17} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group332402059" geometry={nodes.group332402059.geometry} material={materials.mat11} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group335831164" geometry={nodes.group335831164.geometry} material={materials.mat17} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group358629412" geometry={nodes.group358629412.geometry} material={materials.mat23} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group360414338" geometry={nodes.group360414338.geometry} material={materials.mat10} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group367993755" geometry={nodes.group367993755.geometry} material={materials.mat23} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group376269877" geometry={nodes.group376269877.geometry} material={materials.mat17} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group377627692" geometry={nodes.group377627692.geometry} material={materials.mat23} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <group name="group381560967" position={[1.747, 0.323, -1.592]} scale={0.308}>
          <mesh name="mesh381560967" geometry={nodes.mesh381560967.geometry} material={materials.mat17} />
          <mesh name="mesh381560967_1" geometry={nodes.mesh381560967_1.geometry} material={materials.mat15} />
        </group>
        <mesh name="group395313063" geometry={nodes.group395313063.geometry} material={materials.mat17} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group417210971" geometry={nodes.group417210971.geometry} material={materials.mat22} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group438055053" geometry={nodes.group438055053.geometry} material={materials.mat15} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group458008891" geometry={nodes.group458008891.geometry} material={materials.mat21} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group508965083" geometry={nodes.group508965083.geometry} material={materials.mat15} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <group name="group549538436" position={[1.747, 0.323, -1.592]} scale={0.308}>
          <mesh name="mesh549538436" geometry={nodes.mesh549538436.geometry} material={materials.mat23} />
          <mesh name="mesh549538436_1" geometry={nodes.mesh549538436_1.geometry} material={materials.mat8} />
          <mesh name="mesh549538436_2" geometry={nodes.mesh549538436_2.geometry} material={materials.mat24} />
        </group>
        <group name="group562682276" position={[1.747, 0.323, -1.592]} scale={0.308}>
          <mesh name="mesh562682276" geometry={nodes.mesh562682276.geometry} material={materials.mat23} />
          <mesh name="mesh562682276_1" geometry={nodes.mesh562682276_1.geometry} material={materials.mat16} />
        </group>
        <mesh name="group563957055" geometry={nodes.group563957055.geometry} material={materials.mat10} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group573210084" geometry={nodes.group573210084.geometry} material={materials.mat11} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group587275507" geometry={nodes.group587275507.geometry} material={materials.mat23} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group602345555" geometry={nodes.group602345555.geometry} material={materials.mat15} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group602384715" geometry={nodes.group602384715.geometry} material={materials.mat17} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <group name="group614062749" position={[1.747, 0.323, -1.592]} scale={0.308}>
          <mesh name="mesh614062749" geometry={nodes.mesh614062749.geometry} material={materials.mat17} />
          <mesh name="mesh614062749_1" geometry={nodes.mesh614062749_1.geometry} material={materials.mat8} />
          <mesh name="mesh614062749_2" geometry={nodes.mesh614062749_2.geometry} material={materials.mat23} />
        </group>
        <group name="group619239296" position={[1.747, 0.323, -1.592]} scale={0.308}>
          <mesh name="mesh619239296" geometry={nodes.mesh619239296.geometry} material={materials.mat16} />
          <mesh name="mesh619239296_1" geometry={nodes.mesh619239296_1.geometry} material={materials.mat23} />
        </group>
        <mesh name="group667732097" geometry={nodes.group667732097.geometry} material={materials.mat17} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group675547103" geometry={nodes.group675547103.geometry} material={materials.mat23} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group676590036" geometry={nodes.group676590036.geometry} material={materials.mat16} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group676697694" geometry={nodes.group676697694.geometry} material={materials.mat21} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group701415949" geometry={nodes.group701415949.geometry} material={materials.mat17} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group704994766" geometry={nodes.group704994766.geometry} material={materials.mat11} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group706968164" geometry={nodes.group706968164.geometry} material={materials.mat17} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group713359564" geometry={nodes.group713359564.geometry} material={materials.mat11} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group731708330" geometry={nodes.group731708330.geometry} material={materials.mat15} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group740024917" geometry={nodes.group740024917.geometry} material={materials.mat15} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group741402870" geometry={nodes.group741402870.geometry} material={materials.mat17} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group761930540" geometry={nodes.group761930540.geometry} material={materials.mat16} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group774251851" geometry={nodes.group774251851.geometry} material={materials.mat8} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group833559944" geometry={nodes.group833559944.geometry} material={materials.mat13} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group854105041" geometry={nodes.group854105041.geometry} material={materials.mat11} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group886964551" geometry={nodes.group886964551.geometry} material={materials.mat15} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <group name="group892610586" position={[1.747, 0.323, -1.592]} scale={0.308}>
          <mesh name="mesh892610586" geometry={nodes.mesh892610586.geometry} material={materials.mat23} />
          <mesh name="mesh892610586_1" geometry={nodes.mesh892610586_1.geometry} material={materials.mat16} />
        </group>
        <mesh name="group893749766" geometry={nodes.group893749766.geometry} material={materials.mat16} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group897881202" geometry={nodes.group897881202.geometry} material={materials.mat16} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group912049542" geometry={nodes.group912049542.geometry} material={materials.mat8} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group935673430" geometry={nodes.group935673430.geometry} material={materials.mat8} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group952295781" geometry={nodes.group952295781.geometry} material={materials.mat17} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group961377794" geometry={nodes.group961377794.geometry} material={materials.mat21} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group968331571" geometry={nodes.group968331571.geometry} material={materials.mat15} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <group name="group997898928" position={[1.747, 0.323, -1.592]} scale={0.308}>
          <mesh name="mesh997898928" geometry={nodes.mesh997898928.geometry} material={materials.mat23} />
          <mesh name="mesh997898928_1" geometry={nodes.mesh997898928_1.geometry} material={materials.mat16} />
        </group>
        <group name="group1002021246" position={[1.747, 0.323, -1.592]} scale={0.308}>
          <mesh name="mesh1002021246" geometry={nodes.mesh1002021246.geometry} material={materials.mat23} />
          <mesh name="mesh1002021246_1" geometry={nodes.mesh1002021246_1.geometry} material={materials.mat16} />
        </group>
        <mesh name="group1004135894" geometry={nodes.group1004135894.geometry} material={materials.mat11} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1013654719" geometry={nodes.group1013654719.geometry} material={materials.mat17} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1017920957" geometry={nodes.group1017920957.geometry} material={materials.mat17} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1033487155" geometry={nodes.group1033487155.geometry} material={materials.mat21} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1050079147" geometry={nodes.group1050079147.geometry} material={materials.mat23} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1051984110" geometry={nodes.group1051984110.geometry} material={materials.mat5} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <group name="group1125399115" position={[1.747, 0.323, -1.592]} scale={0.308}>
          <mesh name="mesh1125399115" geometry={nodes.mesh1125399115.geometry} material={materials.mat23} />
          <mesh name="mesh1125399115_1" geometry={nodes.mesh1125399115_1.geometry} material={materials.mat15} />
        </group>
        <mesh name="group1144869753" geometry={nodes.group1144869753.geometry} material={materials.mat9} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1158745515" geometry={nodes.group1158745515.geometry} material={materials.mat22} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1179872976" geometry={nodes.group1179872976.geometry} material={materials.mat23} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1186992705" geometry={nodes.group1186992705.geometry} material={materials.mat9} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <group name="group1207655705" position={[1.747, 0.323, -1.592]} scale={0.308}>
          <mesh name="mesh1207655705" geometry={nodes.mesh1207655705.geometry} material={materials.mat23} />
          <mesh name="mesh1207655705_1" geometry={nodes.mesh1207655705_1.geometry} material={materials.mat17} />
          <mesh name="mesh1207655705_2" geometry={nodes.mesh1207655705_2.geometry} material={materials.mat8} />
        </group>
        <mesh name="group1216547099" geometry={nodes.group1216547099.geometry} material={materials.mat23} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <group name="group1221721378" position={[1.747, 0.323, -1.592]} scale={0.308}>
          <mesh name="mesh1221721378" geometry={nodes.mesh1221721378.geometry} material={materials.mat16} />
          <mesh name="mesh1221721378_1" geometry={nodes.mesh1221721378_1.geometry} material={materials.mat23} />
        </group>
        <mesh name="group1247630253" geometry={nodes.group1247630253.geometry} material={materials.mat23} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <group name="group1264231965" position={[1.747, 0.323, -1.592]} scale={0.308}>
          <mesh name="mesh1264231965" geometry={nodes.mesh1264231965.geometry} material={materials.mat15} />
          <mesh name="mesh1264231965_1" geometry={nodes.mesh1264231965_1.geometry} material={materials.mat17} />
        </group>
        <mesh name="group1275655566" geometry={nodes.group1275655566.geometry} material={materials.mat17} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1280736543" geometry={nodes.group1280736543.geometry} material={materials.mat17} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1297143275" geometry={nodes.group1297143275.geometry} material={materials.mat17} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1324414297" geometry={nodes.group1324414297.geometry} material={materials.mat15} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1332034770" geometry={nodes.group1332034770.geometry} material={materials.mat15} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1338682067" geometry={nodes.group1338682067.geometry} material={materials.mat15} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1350575126" geometry={nodes.group1350575126.geometry} material={materials.mat23} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1381102080" geometry={nodes.group1381102080.geometry} material={materials.mat17} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1395154075" geometry={nodes.group1395154075.geometry} material={materials.mat16} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <group name="group1403192981" position={[1.747, 0.323, -1.592]} scale={0.308}>
          <mesh name="mesh1403192981" geometry={nodes.mesh1403192981.geometry} material={materials.mat23} />
          <mesh name="mesh1403192981_1" geometry={nodes.mesh1403192981_1.geometry} material={materials.mat8} />
          <mesh name="mesh1403192981_2" geometry={nodes.mesh1403192981_2.geometry} material={materials.mat17} />
        </group>
        <mesh name="group1403669828" geometry={nodes.group1403669828.geometry} material={materials.mat15} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1403985160" geometry={nodes.group1403985160.geometry} material={materials.mat15} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1411416077" geometry={nodes.group1411416077.geometry} material={materials.mat23} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <group name="group1456472197" position={[1.747, 0.323, -1.592]} scale={0.308}>
          <mesh name="mesh1456472197" geometry={nodes.mesh1456472197.geometry} material={materials.mat23} />
          <mesh name="mesh1456472197_1" geometry={nodes.mesh1456472197_1.geometry} material={materials.mat16} />
        </group>
        <group name="group1517310649" position={[1.747, 0.323, -1.592]} scale={0.308}>
          <mesh name="mesh1517310649" geometry={nodes.mesh1517310649.geometry} material={materials.mat11} />
          <mesh name="mesh1517310649_1" geometry={nodes.mesh1517310649_1.geometry} material={materials.mat23} />
        </group>
        <mesh name="group1526395978" geometry={nodes.group1526395978.geometry} material={materials.mat16} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1548294784" geometry={nodes.group1548294784.geometry} material={materials.mat5} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1554204416" geometry={nodes.group1554204416.geometry} material={materials.mat15} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1562485891" geometry={nodes.group1562485891.geometry} material={materials.mat15} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1578493595" geometry={nodes.group1578493595.geometry} material={materials.mat15} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1586564780" geometry={nodes.group1586564780.geometry} material={materials.mat17} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1601213803" geometry={nodes.group1601213803.geometry} material={materials.mat15} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1620621923" geometry={nodes.group1620621923.geometry} material={materials.mat17} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1634298705" geometry={nodes.group1634298705.geometry} material={materials.mat17} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1644871367" geometry={nodes.group1644871367.geometry} material={materials.mat23} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1664409649" geometry={nodes.group1664409649.geometry} material={materials.mat21} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <group name="group1693732898" position={[1.747, 0.323, -1.592]} scale={0.308}>
          <mesh name="mesh1693732898" geometry={nodes.mesh1693732898.geometry} material={materials.mat23} />
          <mesh name="mesh1693732898_1" geometry={nodes.mesh1693732898_1.geometry} material={materials.mat17} />
        </group>
        <mesh name="group1714365479" geometry={nodes.group1714365479.geometry} material={materials.mat15} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <group name="group1722992837" position={[1.747, 0.323, -1.592]} scale={0.308}>
          <mesh name="mesh1722992837" geometry={nodes.mesh1722992837.geometry} material={materials.mat15} />
          <mesh name="mesh1722992837_1" geometry={nodes.mesh1722992837_1.geometry} material={materials.mat23} />
        </group>
        <mesh name="group1724716729" geometry={nodes.group1724716729.geometry} material={materials.mat23} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1739615239" geometry={nodes.group1739615239.geometry} material={materials.mat23} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1747962436" geometry={nodes.group1747962436.geometry} material={materials.mat23} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <group name="group1754797367" position={[1.747, 0.323, -1.592]} scale={0.308}>
          <mesh name="mesh1754797367" geometry={nodes.mesh1754797367.geometry} material={materials.mat13} />
          <mesh name="mesh1754797367_1" geometry={nodes.mesh1754797367_1.geometry} material={materials.mat2} />
        </group>
        <group name="group1783485154" position={[1.747, 0.323, -1.592]} scale={0.308}>
          <mesh name="mesh1783485154" geometry={nodes.mesh1783485154.geometry} material={materials.mat23} />
          <mesh name="mesh1783485154_1" geometry={nodes.mesh1783485154_1.geometry} material={materials.mat16} />
        </group>
        <mesh name="group1788593855" geometry={nodes.group1788593855.geometry} material={materials.mat23} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1799134820" geometry={nodes.group1799134820.geometry} material={materials.mat23} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1799644813" geometry={nodes.group1799644813.geometry} material={materials.mat10} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1800416953" geometry={nodes.group1800416953.geometry} material={materials.mat17} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1809112506" geometry={nodes.group1809112506.geometry} material={materials.mat12} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1817044955" geometry={nodes.group1817044955.geometry} material={materials.mat22} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <group name="group1841586256" position={[1.747, 0.323, -1.592]} scale={0.308}>
          <mesh name="mesh1841586256" geometry={nodes.mesh1841586256.geometry} material={materials.mat17} />
          <mesh name="mesh1841586256_1" geometry={nodes.mesh1841586256_1.geometry} material={materials.mat15} />
        </group>
        <mesh name="group1851189319" geometry={nodes.group1851189319.geometry} material={materials.mat22} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1851977708" geometry={nodes.group1851977708.geometry} material={materials.mat23} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1867655503" geometry={nodes.group1867655503.geometry} material={materials.mat24} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1874588551" geometry={nodes.group1874588551.geometry} material={materials.mat8} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1876175818" geometry={nodes.group1876175818.geometry} material={materials.mat22} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <group name="group1882511964" position={[1.747, 0.323, -1.592]} scale={0.308}>
          <mesh name="mesh1882511964" geometry={nodes.mesh1882511964.geometry} material={materials.mat8} />
          <mesh name="mesh1882511964_1" geometry={nodes.mesh1882511964_1.geometry} material={materials.mat23} />
          <mesh name="mesh1882511964_2" geometry={nodes.mesh1882511964_2.geometry} material={materials.mat17} />
        </group>
        <mesh name="group1961792104" geometry={nodes.group1961792104.geometry} material={materials.mat10} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group1977161757" geometry={nodes.group1977161757.geometry} material={materials.mat17} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group2011638665" geometry={nodes.group2011638665.geometry} material={materials.mat23} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group2024160734" geometry={nodes.group2024160734.geometry} material={materials.mat17} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <group name="group2029488445" position={[1.747, 0.323, -1.592]} scale={0.308}>
          <mesh name="mesh2029488445" geometry={nodes.mesh2029488445.geometry} material={materials.mat15} />
          <mesh name="mesh2029488445_1" geometry={nodes.mesh2029488445_1.geometry} material={materials.mat23} />
        </group>
        <mesh name="group2032200821" geometry={nodes.group2032200821.geometry} material={materials.mat16} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group2061932718" geometry={nodes.group2061932718.geometry} material={materials.mat12} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group2083473735" geometry={nodes.group2083473735.geometry} material={materials.mat17} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group2094616060" geometry={nodes.group2094616060.geometry} material={materials.mat17} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group2101908238" geometry={nodes.group2101908238.geometry} material={materials.mat15} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group2102640996" geometry={nodes.group2102640996.geometry} material={materials.mat17} position={[1.747, 0.323, -1.592]} scale={0.308} />
        <mesh name="group2577447" geometry={nodes.group2577447.geometry} material={materials['mat2.001']} position={[-1.439, 0.577, -1.726]} rotation={[Math.PI, -0.01, Math.PI]} scale={0.755} />
        <mesh name="group159381947" geometry={nodes.group159381947.geometry} material={materials.mat7} position={[-1.439, 0.577, -1.726]} rotation={[Math.PI, -0.01, Math.PI]} scale={0.755} />
        <mesh name="group206941786" geometry={nodes.group206941786.geometry} material={materials['mat13.001']} position={[-1.439, 0.577, -1.726]} rotation={[Math.PI, -0.01, Math.PI]} scale={0.755} />
        <mesh name="group218843811" geometry={nodes.group218843811.geometry} material={materials['mat5.001']} position={[-1.439, 0.577, -1.726]} rotation={[Math.PI, -0.01, Math.PI]} scale={0.755} />
        <mesh name="group258849837" geometry={nodes.group258849837.geometry} material={materials.mat7} position={[-1.439, 0.577, -1.726]} rotation={[Math.PI, -0.01, Math.PI]} scale={0.755} />
        <mesh name="group285218960" geometry={nodes.group285218960.geometry} material={materials['mat2.001']} position={[-1.439, 0.577, -1.726]} rotation={[Math.PI, -0.01, Math.PI]} scale={0.755} />
        <mesh name="group287812142" geometry={nodes.group287812142.geometry} material={materials['mat2.001']} position={[-1.439, 0.577, -1.726]} rotation={[Math.PI, -0.01, Math.PI]} scale={0.755} />
        <mesh name="group589443044" geometry={nodes.group589443044.geometry} material={materials.mat18} position={[-1.439, 0.577, -1.726]} rotation={[Math.PI, -0.01, Math.PI]} scale={0.755} />
        <mesh name="group841292617" geometry={nodes.group841292617.geometry} material={materials.mat18} position={[-1.439, 0.577, -1.726]} rotation={[Math.PI, -0.01, Math.PI]} scale={0.755} />
        <group name="group1066987434" position={[-1.439, 0.577, -1.726]} rotation={[Math.PI, -0.01, Math.PI]} scale={0.755}>
          <mesh name="mesh1066987434" geometry={nodes.mesh1066987434.geometry} material={materials['mat12.001']} />
          <mesh name="mesh1066987434_1" geometry={nodes.mesh1066987434_1.geometry} material={materials['mat13.001']} />
          <mesh name="mesh1066987434_2" geometry={nodes.mesh1066987434_2.geometry} material={materials['mat23.001']} />
        </group>
        <mesh name="group1245885350" geometry={nodes.group1245885350.geometry} material={materials['mat12.001']} position={[-1.439, 0.577, -1.726]} rotation={[Math.PI, -0.01, Math.PI]} scale={0.755} />
        <mesh name="group1329329239" geometry={nodes.group1329329239.geometry} material={materials.mat20} position={[-1.439, 0.577, -1.726]} rotation={[Math.PI, -0.01, Math.PI]} scale={0.755} />
        <mesh name="group1429174951" geometry={nodes.group1429174951.geometry} material={materials.mat7} position={[-1.439, 0.577, -1.726]} rotation={[Math.PI, -0.01, Math.PI]} scale={0.755} />
        <group name="group1602327308" position={[-1.439, 0.577, -1.726]} rotation={[Math.PI, -0.01, Math.PI]} scale={0.755}>
          <mesh name="mesh1602327308" geometry={nodes.mesh1602327308.geometry} material={materials['mat21.001']} />
          <mesh name="mesh1602327308_1" geometry={nodes.mesh1602327308_1.geometry} material={materials['mat22.001']} />
        </group>
        <mesh name="group1678679790" geometry={nodes.group1678679790.geometry} material={materials['mat8.001']} position={[-1.439, 0.577, -1.726]} rotation={[Math.PI, -0.01, Math.PI]} scale={0.755} />
        <mesh name="group1765619652" geometry={nodes.group1765619652.geometry} material={materials['mat12.001']} position={[-1.439, 0.577, -1.726]} rotation={[Math.PI, -0.01, Math.PI]} scale={0.755} />
        <mesh name="group1782178297" geometry={nodes.group1782178297.geometry} material={materials.mat7} position={[-1.439, 0.577, -1.726]} rotation={[Math.PI, -0.01, Math.PI]} scale={0.755} />
        <mesh name="group1792446406" geometry={nodes.group1792446406.geometry} material={materials.mat7} position={[-1.439, 0.577, -1.726]} rotation={[Math.PI, -0.01, Math.PI]} scale={0.755} />
        <mesh name="group1959835629" geometry={nodes.group1959835629.geometry} material={materials['mat2.001']} position={[-1.439, 0.577, -1.726]} rotation={[Math.PI, -0.01, Math.PI]} scale={0.755} />
        <mesh name="group2045129996" geometry={nodes.group2045129996.geometry} material={materials['mat13.001']} position={[-1.439, 0.577, -1.726]} rotation={[Math.PI, -0.01, Math.PI]} scale={0.755} />
        <mesh name="group2146201506" geometry={nodes.group2146201506.geometry} material={materials['mat9.001']} position={[-1.439, 0.577, -1.726]} rotation={[Math.PI, -0.01, Math.PI]} scale={0.755} />
      </group>
    </group>
  )
}

useGLTF.preload('/roomScene.glb')
