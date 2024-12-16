import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { RootState } from '../redux/store/store';
import { AppDispatch } from '../redux/store/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
