import { Component } from 'react';

const DEFAULT_TITLE = 'Ups, something went wrong...';
const DEFAULT_DESCRIPTION = 'Please, contact system administrator if you have nothing else to do';

export class ErrorBoundary extends Component {
    state = {
        error: null,
        errorInfo: null,
    };

    static getDerivedStateFromError(error) {
        return { error };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo });
    }

    render() {
        const { error, errorInfo } = this.state;

        if (errorInfo) {
            const [ title, description ] = import.meta.env.NODE_ENV === 'development'
                ? [ error?.toString() ?? DEFAULT_TITLE, errorInfo.componentStack ]
                : [ DEFAULT_TITLE, DEFAULT_DESCRIPTION ];

            return (
                <Box sx={{
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}>
                    <Box mb={0}>
                        <Typography variant="h4">
                            {title}
                        </Typography>
                    </Box>
                    <Box mb={2}>
                        <Typography variant="body1">
                            {description}
                        </Typography>
                    </Box>
                </Box>
            );
        }
        return this.props.children;
    }
}
