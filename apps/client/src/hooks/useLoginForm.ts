import { useState, useCallback } from 'react';
import { UserToLogin } from '../interfaces/User.interface';

export const useLoginForm = () => {
  const [user, setUser] = useState<UserToLogin>({ email: '', password: '' });
  const [errors, setErrors] = useState<Partial<UserToLogin>>({});

  const validateForm = useCallback((): boolean => {
    const newErrors: Partial<UserToLogin> = {};
    
    if (!user.email?.trim()) newErrors.email = 'Email is required';
    if (!user.password || user.password.length < 6) {
      /// need to validate if password coming from backend is correct
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [user]);

  const updateField = useCallback((field: keyof UserToLogin, value: string) => {
    setUser(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: undefined }));
  }, []);

  const reset = useCallback(() => {
    setUser({ email: '', password: '' });
    setErrors({});
  }, []);

  return { user, errors, updateField, validateForm, reset };
};
