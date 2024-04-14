import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './Recording.style';
import { COLORS } from '../../../constants';
import { router } from 'expo-router';
import { Asset } from 'expo-asset';
import { Suspense, useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei/native';
import { Canvas } from '@react-three/fiber/native';

function Character({ modelUri }) {
  const { scene } = useGLTF(modelUri);
  return <primitive object={scene} scale={[0.8, 0.8, 0.8]} />;
}

function Recording() {
  const [characterModelPath, setCharacterModelPath] = useState('');

  useEffect(() => {
    const characterGLBAsset = Asset.fromModule(require('../../../assets/3ds/Character-1.glb'));
    characterGLBAsset
      .downloadAsync()
      .then((asset) => {
        return asset.localUri ?? asset.uri;
      })
      .then((uri) => {
        setCharacterModelPath(uri);
      });
  });

  return (
    <View style={styles.container}>
      <View style={styles.closeBtnContainer}>
        <TouchableOpacity style={styles.closeBtn} onPress={() => router.push('/chat/Japanese')}>
          <AntDesign name="close" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.title}>What do you want to study today?</Text>
      </View>
      <Canvas>
        <ambientLight />
        <Suspense>{characterModelPath && <Character modelUri={characterModelPath} />}</Suspense>
      </Canvas>
      <View style={styles.recordBtnContainer}>
        <TouchableOpacity style={styles.recordBtn}>
          <AntDesign name="pause" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Recording;
