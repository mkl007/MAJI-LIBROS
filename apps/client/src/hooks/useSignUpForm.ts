import { useState, useCallback } from 'react';
import { UserToSignUp } from '../interfaces/User.interface';

export const useSignUpForm = () => {
  const [user, setUser] = useState<UserToSignUp>({ fullname: '', email: '', password: '' });
  const [errors, setErrors] = useState<Partial<UserToSignUp>>({});

  const validateForm = useCallback((): boolean => {
    const newErrors: Partial<UserToSignUp> = {};
    
    if (!user.fullname?.trim()) newErrors.fullname = 'Name is required';
    if (!user.email?.trim()) newErrors.email = 'Email is required';
    if (!user.password || user.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [user]);

  const updateField = useCallback((field: keyof UserToSignUp, value: string) => {
    setUser(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: undefined }));
  }, []);

  const reset = useCallback(() => {
    setUser({ fullname: '', email: '', password: '' });
    setErrors({});
  }, []);

  return { user, errors, updateField, validateForm, reset };
};
