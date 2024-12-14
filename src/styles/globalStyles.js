import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#007AFF',
  background: '#FFFFFF',
  text: '#000000',
  textSecondary: '#666666',
  border: '#E5E5E5',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    width: '100%',
  },
  text: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 10,
    width: '100%',
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: colors.background,
    fontSize: 16,
    fontWeight: '600',
  },
  card: {
    backgroundColor: colors.background,
    borderRadius: 8,
    padding: 15,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: colors.border,
    width: '100%',
  },
});
