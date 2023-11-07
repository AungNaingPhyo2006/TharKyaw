import React, { useState,useRef  } from 'react';
import { View, TouchableOpacity,Text,StyleSheet ,ScrollView} from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Canvas = () => {
    const [paths, setPaths] = useState([]);
    const [drawing, setDrawing] = useState(false);
    const [currentPath, setCurrentPath] = useState('');
    const svgRef = useRef(null);
  
    const handleTouchStart = ({ nativeEvent }) => {
      if (!drawing) {
        setDrawing(true);
        const { locationX, locationY } = nativeEvent;
        setCurrentPath(`M${locationX},${locationY}`);
      }
    };
  
    const handleTouchMove = ({ nativeEvent }) => {
      if (drawing) {
        const { locationX, locationY } = nativeEvent;
        setCurrentPath((prevPath) => `${prevPath} L${locationX},${locationY}`);
      }
    };
  
    const handleTouchEnd = () => {
      if (drawing) {
        setPaths([...paths, currentPath]);
        setCurrentPath('');
        setDrawing(false);
      }
    };
    const handleClearCanvas = () => {
        setPaths([]); // Clear all drawings by resetting the 'paths' state.
      };
      const handleUndo = () => {
        if (paths.length > 0) {
          const updatedPaths = [...paths];
          updatedPaths.pop(); // Remove the last drawing path.
          setPaths(updatedPaths);
        }
      };
    //   <=================>
    return (
      <View style={{backgroundColor:'black',}}>
       <View style={{backgroundColor:'cyan', marginVertical:12,marginTop:10, marginHorizontal:6, borderRadius:5,}}>
      <Svg
          ref={svgRef}
          height="80%"
          width="100%"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {paths.map((path, index) => (
            <Path key={index} d={path} stroke="black" strokeWidth={5} fill="none" />
          ))}
          <Path d={currentPath} stroke="black" strokeWidth={5} fill="none" />
        </Svg>
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleClearCanvas}>
          <Text style={styles.buttonText}>Clear Canvas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleUndo}>
          <Text style={styles.buttonText}>Undo</Text>
        </TouchableOpacity>
      </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    buttonContainer: {
        // backgroundColor:'red',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 30,
      },
    button: {
        marginHorizontal:12,
        borderRadius:5,
      backgroundColor: 'blue',
      padding: 10,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });
  
export default Canvas;
