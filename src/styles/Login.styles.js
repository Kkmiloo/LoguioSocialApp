import { StyleSheet } from 'react-native';
import { COLORS } from './theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    width: '100%',
    height: 56,
    borderColor: 'gray',
    marginBottom: 12,
    paddingHorizontal: 8,
    paddingLeft: 16,
    borderRadius: 8,
    backgroundColor: '#F6F7FA',
    /* fontFamily: 'Dhyana', */
    fontSize: 16,
  },
  button: {
    width: '90%',
    height: 56,
    borderColor: 'gray',
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginTop: 24,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#f1abab',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0,
    shadowRadius: 6.65,
    elevation: 11,
  },
  textButton: {
    color: '#fff',
    fontSize: 18,
    /* fontFamily: 'Dhyana', */

    fontWeight: '400',
  },

  shadowContainer: {
    shadowColor: '#F1ABAB',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  logo: {
    marginTop: 48,
    width: 200,
    height: 140,
    resizeMode: 'contain',
    marginBottom: 24,
  },
});
